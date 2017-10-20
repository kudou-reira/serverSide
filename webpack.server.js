const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const serverConfig = {
	// inform webpack that we are a building a bundle for nodeJS rather than for the browser
	target: 'node',

	// tell webpack the root file of our server application
	entry: './src/index.js',

	// tell webpack where to put the output file
	// that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	externals: [webpackNodeExternals()]
	//tell webpack to run babel on every file it runs through
	
};

module.exports = merge(baseConfig, serverConfig);