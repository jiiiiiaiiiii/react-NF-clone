import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Root from './Root';
import Home from './screens/Home';
import About from './screens/About';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';
import Followers from './screens/users/Followers';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />,
				errorElement: <ErrorComponent />,
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path:'users/:userId',
				element: <User />,
				children: [
					{
						path: 'followers',
						element: <Followers />
					}
				]
			}
		],
		errorElement: <NotFound />
	}
]);

export default Router;
