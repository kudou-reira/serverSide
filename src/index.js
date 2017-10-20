// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//polyfill gives babel methods
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
	const store = createStore();
	// do all the store outside of renderer
	const promises = matchRoutes(Routes, req.path).map(({ route }) => {
		return route.loadData ? route.loadData(store) : null;
	});

	//promise all is a native function that takes an array of promises and returns one single array
	Promise.all(promises).then(() => {
		// initialize and load data into store
		res.send(renderer(req, store));
	});
});

app.listen(3000, () => {
	console.log('listening on port 3000')
});