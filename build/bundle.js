/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var FETCH_TEST = exports.FETCH_TEST = 'fetch_test';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(2);

var _header = __webpack_require__(19);

var _header2 = _interopRequireDefault(_header);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
	var route = _ref.route;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(route.routes)
	);
};

function loadData(store) {
	return store.dispatch((0, _actions.fetchTest)());
}

exports.default = {
	component: App,
	loadData: loadData
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchTest = exports.fetchCurrentUser = exports.fetchUsers = undefined;

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsers = exports.fetchUsers = function fetchUsers() {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, axiosInstance) {
			var res;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _axios2.default.get('http://react-ssr-api.herokuapp.com/users');

						case 2:
							res = _context.sent;


							dispatch({
								type: _types.FETCH_USERS,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function (_x, _x2, _x3) {
			return _ref.apply(this, arguments);
		};
	}();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, axiosInstance) {
			var res;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return _axios2.default.get('/api/current_user');

						case 2:
							res = _context2.sent;


							dispatch({
								type: _types.FETCH_CURRENT_USER,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function (_x4, _x5, _x6) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var fetchTest = exports.fetchTest = function fetchTest() {
	return function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
			var res;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return _axios2.default.get('/api/test');

						case 2:
							res = _context3.sent;


							dispatch({
								type: _types.FETCH_TEST,
								payload: res.data
							});

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, undefined);
		}));

		return function (_x7) {
			return _ref3.apply(this, arguments);
		};
	}();
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'div',
			null,
			'I"m the home components'
		),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					return console.log('hi there!');
				} },
			'Press me'
		)
	);
};

exports.default = {
	component: Home
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(11);

var _actions = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
	_inherits(UsersList, _Component);

	function UsersList() {
		_classCallCheck(this, UsersList);

		return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
	}

	_createClass(UsersList, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.fetchUsers();
		}
	}, {
		key: 'renderUsers',
		value: function renderUsers() {
			return this.props.users.map(function (user) {
				return _react2.default.createElement(
					'li',
					{ key: user.id },
					user.name
				);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				'Here\'s a big list of users:',
				_react2.default.createElement(
					'ul',
					null,
					this.renderUsers()
				)
			);
		}
	}]);

	return UsersList;
}(_react.Component);

function mapStateToProps(state) {
	return {
		users: state.users
	};
}

function loadData(store) {
	return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
	loadData: loadData,
	component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// keys.js figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
	// we are in production
	module.exports = __webpack_require__(30);
} else {
	// we are in development
	module.exports = __webpack_require__(31);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

var _express = __webpack_require__(16);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _expressHttpProxy = __webpack_require__(17);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(18);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(24);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = __webpack_require__(29); // const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/home').default;

//polyfill gives babel methods

var mongoose = __webpack_require__(1);
var keys = __webpack_require__(13);
var passport = __webpack_require__(4);

__webpack_require__(32);
__webpack_require__(33);
__webpack_require__(34);

mongoose.connect(keys.mongoURI);

var app = (0, _express2.default)();

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

__webpack_require__(38)(app);

// app.use('/auth/', proxy('/'));
app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:3000'));

// app.use('/auth', proxy('localhost:3000'));
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
	var store = (0, _createStore2.default)(req);
	// do all the store outside of renderer
	var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
		var route = _ref.route;

		return route.loadData ? route.loadData(store) : null;
	});

	//promise all is a native function that takes an array of promises and returns one single array
	Promise.all(promises).then(function () {
		// initialize and load data into store
		res.send((0, _renderer2.default)(req, store));
	});
});

app.listen(3000, function () {
	console.log('listening on port 3000');
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

var _homePage = __webpack_require__(9);

var _homePage2 = _interopRequireDefault(_homePage);

var _usersListPage = __webpack_require__(10);

var _usersListPage2 = _interopRequireDefault(_usersListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

exports.default = [_extends({}, _app2.default, {
	routes: [_extends({
		path: '/'
	}, _homePage2.default, {
		exact: true
	}), _extends({}, _usersListPage.loadData, {
		path: '/users'
	}, _usersListPage2.default)]
})];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' },
			'React SSR'
		)
	);
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(6);

var _reactRedux = __webpack_require__(11);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(23);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ location: req.path, context: {} },
			_react2.default.createElement(
				'div',
				null,
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		)
	));

	return '\n\t\t<html>\n\t\t\t<head></head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.INITIAL_STATE = ' + JSON.stringify(store.getState()) + '\n\t\t\t\t</script>\n\t\t\t\t<script src="bundle.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _app = __webpack_require__(5);

var _app2 = _interopRequireDefault(_app);

var _homePage = __webpack_require__(9);

var _homePage2 = _interopRequireDefault(_homePage);

var _usersListPage = __webpack_require__(10);

var _usersListPage2 = _interopRequireDefault(_usersListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

exports.default = [_extends({}, _app2.default, {
	routes: [_extends({
		path: '/'
	}, _homePage2.default, {
		exact: true
	}), _extends({}, _usersListPage.loadData, {
		path: '/users'
	}, _usersListPage2.default)]
})];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(8);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(26);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {

	var axiosInstance = _axios2.default.create({
		baseURL: 'http://react-ssr-api.herokuapp.com/users',
		headers: { cookie: req.get('cookie') || '' }
	});

	var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

	return store;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(12);

var _usersReducer = __webpack_require__(27);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _authReducer = __webpack_require__(28);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	users: _usersReducer2.default,
	auth: _authReducer2.default
});

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _types = __webpack_require__(3);

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_USERS:
			return action.payload;
		default:
			return state;
	}
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var action = arguments[1];

	switch (action.type) {
		case _types.FETCH_CURRENT_USER:
			return action.payload || false;
		default:
			return state;
	}
};

var _types = __webpack_require__(3);

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// production keys here
//dev.js don't commit
module.exports = {
	googleClientID: process.env.GOOGLE_CLIENT_ID,
	googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
	facebookClientID: process.env.FACEBOOK_CLIENT_ID,
	facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET,
	twitterClientID: process.env.TWITTER_CLIENT_ID,
	twitterClientSecret: process.env.TWITTER_CLIENT_SECRET,
	mongoURI: process.env.MONGO_URI,
	cookieKey: process.env.COOKIE_KEY
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//dev.js don't commit
module.exports = {
	googleClientID: '759231680315-027lgsj9v6623r8qtv62mhts335tk6t7.apps.googleusercontent.com',
	googleClientSecret: 'WN9jtHWVeUYYAVHMXnwuxnLa',
	facebookClientID: '509584289402593',
	facebookClientSecret: '9936b1f0436fbcbf62aa7f2bd40d23d3',
	twitterClientID: 'fxXDsdfUp7pQSyhydTuR8WYoO',
	twitterClientSecret: 'Kq70BHTN9DmmJkSJAClbfxx41UReOtIm6A3U9H2UJ95vuHx5MG',
	mongoURI: 'mongodb://admin:password@ds115045.mlab.com:15045/fgo-view-test',
	cookieKey: 'eeeer09e21nd62984jj210hds0ayd210hsd80a21h80dys90qhd20hd0s'
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;


var userSchema = new Schema({
	googleId: String,
	facebookId: String,
	twitterId: String,
	savedCharacters: [{
		buildingName: String,
		link: String,
		trainStation: [{ type: String }],
		inDatabase: { type: Boolean, default: true },
		apaman: Boolean,
		gaijinPot: Boolean
	}]

});

mongoose.model('users', userSchema);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;


var profileSchema = new Schema({
	email: String,
	name: String
});

mongoose.model('profile', profileSchema);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(4);
var mongoose = __webpack_require__(1);
var GoogleStrategy = __webpack_require__(35).Strategy;
var FacebookStrategy = __webpack_require__(36).Strategy;
var TwitterStrategy = __webpack_require__(37).Strategy;

var keys = __webpack_require__(13);

var User = mongoose.model('users');
var Profile = mongoose.model('profile');

//get 'user' from done(null, user)
passport.serializeUser(function (user, done) {
	//the user.id is not the profile id
	//the user.id is the "_id" in mongo database
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id).then(function (user) {
		done(null, user);
	});
});

passport.use(new GoogleStrategy({
	clientID: keys.googleClientID,
	clientSecret: keys.googleClientSecret,
	callbackURL: '/auth/google/callback',
	proxy: true
}, function (accessToken, refreshToken, profile, done) {
	// console.log('access token', accessToken);
	// console.log('refresh token', refreshToken);
	// console.log('profile:', profile);
	// console.log('email:', profile.emails[0].value)
	// console.log('display name:', profile.displayName)
	User.findOne({ googleId: profile.id }).then(function (existingUser) {
		if (existingUser) {
			done(null, existingUser);
		} else {
			//saving User is async
			new User({ googleId: profile.id }).save().then(function (user) {
				return done(null, user);
			});

			Profile.findOne({ email: profile.emails[0].value }).then(function (existingEmail) {
				if (existingEmail) {
					console.log("email exists!");
					done(null, existingEmail);
				} else {
					new Profile({
						name: profile.displayName,
						email: profile.emails[0].value
					}).save().then(function (profile) {
						return done(null, profile);
					});
				}
			});
		}
	});
}));

//	    profileFields:['id','displayName','emails']

passport.use(new FacebookStrategy({
	clientID: keys.facebookClientID,
	clientSecret: keys.facebookClientSecret,
	callbackURL: '/auth/facebook/callback',
	profileFields: ['email', 'id', 'displayName'],
	proxy: true
}, function (accessToken, refreshToken, profile, done) {
	User.findOne({ facebookId: profile.id }).then(function (existingUser) {
		if (existingUser) {
			done(null, existingUser);
		} else {
			new User({ facebookId: profile.id }).save().then(function (user) {
				return done(null, user);
			});

			Profile.findOne({ email: profile.emails[0].value }).then(function (existingEmail) {
				if (existingEmail) {
					console.log("email exists!");
					done(null, existingEmail);
				} else {
					new Profile({
						name: profile.displayName,
						email: profile.emails[0].value
					}).save().then(function (profile) {
						return done(null, profile);
					});
				}
			});
		}
	});
}));

passport.use(new TwitterStrategy({
	consumerKey: keys.twitterClientID,
	consumerSecret: keys.twitterClientSecret,
	callbackURL: '/auth/twitter/callback',
	includeEmail: true,
	proxy: true
}, function (accessToken, refreshToken, profile, done) {
	User.findOne({ twitterId: profile.id }).then(function (existingUser) {
		if (existingUser) {
			done(null, existingUser);
		} else {
			new User({ twitterId: profile.id }).save().then(function (user) {
				return done(null, user);
			});

			Profile.findOne({ email: profile.emails[0].value }).then(function (existingEmail) {
				if (existingEmail) {
					console.log("email exists!");
					done(null, existingEmail);
				} else {
					new Profile({
						name: profile.displayName,
						email: profile.emails[0].value
					}).save().then(function (profile) {
						return done(null, profile);
					});
				}
			});
		}
	});
}));

// passport.use(
// 	new LocalStrategy(
// 		async (username, password, done) => {
// 			let user = await User.findOne({ username });
// 			if (!user) {
// 				return done(null, false);
// 			}
// 			// TODO Change to test against bcrypt password
// 			if (user.password != password) {
// 				return done(null, false);
// 			}
// 			return done(null, user);
//     	}
//     )
// );

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("passport-facebook");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("passport-twitter");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(4);

module.exports = function (app) {

	app.get('/auth/google', passport.authenticate('google', {
		scope: ['profile', 'email']
	}));

	//both use passport.authenticate('google'), but the one below does other stuff

	app.get('/auth/google/callback', passport.authenticate('google'), function (req, res) {
		res.redirect('/saved');
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {
		scope: ['public_profile', 'email']
	}));

	app.get('/auth/facebook/callback', passport.authenticate('facebook'), function (req, res) {
		res.redirect('/saved');
	});

	app.get('/auth/twitter', passport.authenticate('twitter', {
		scope: ['include_email=true']
	}));

	app.get('/auth/twitter/callback', passport.authenticate('twitter'), function (req, res) {
		res.redirect('/saved');
	});

	// app.post('/login', passport.authenticate('local', {
	//   failureRedirect: '/login'
	// }), (req, res) => {
	//   // You can also redirect here but I'm still building out my app
	//   // REDIRECT
	//   console.log(req)
	//   res.send({ message: 'success' });
	// });

	app.get('/api/logout', function (req, res) {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', function (req, res) {
		res.send(req.user);
	});

	app.get('/api/test', function (req, res) {
		res.send({
			hi: "welcome"
		});
	});
};

/***/ })
/******/ ]);