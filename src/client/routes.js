import React from 'react';
import HomePage from './pages/homePage';
import UsersListPage, { loadData } from './pages/usersListPage';

// export default () => {
// 	return (
// 		<div>
// 			<Route exact path ='/' component={Home} />
// 			<Route path="/hi" component={() => 'Hi'} />
// 			<Route path="/users" component={UsersList} />
// 		</div>
// 	)
// }

export default [
	{
		path: '/',
		...HomePage,
		exact: true
	},
	{
		...loadData,
		path: '/users',
		...UsersListPage
	}
];