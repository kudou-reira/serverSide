// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//polyfill gives babel methods
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const cors = require('cors')
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');

require('./models/user');
require('./models/profile');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors())
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

// app.use('/auth/', proxy('/'));
app.use('/api', proxy('http://localhost:3000'));

// app.use('/auth', proxy('localhost:3000'));
app.use(express.static('public'));

app.get('*', (req, res) => {
	const store = createStore(req);
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