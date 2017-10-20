import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';
import { fetchCurrentUser } from './actions';
import { fetchTest } from './actions';

const App = ({ route }) => {
	return (
		<div>
			<Header />
			{renderRoutes(route.routes)}
		</div>
	);
};

function loadData(store) {
	return store.dispatch(fetchTest())
}

export default {
	component: App,
	loadData
};