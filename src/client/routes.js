import React from 'react';
import App from './app';
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
		...App,
		routes: [
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
		]
	}

];

