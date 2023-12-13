import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';
import Root from './Root';
import NotFound from './screens/NotFound';
import ErrorComponent from './components/ErrorComponent';
import User from './screens/users/User';

// Router를 Array 형식으로 표현(-> JS Object 형식)
const router = createBrowserRouter([
	{
		// 첫페이지 = 전체 Router들의 container
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
				element: <User />
			}
		],
		errorElement: <NotFound />
	}
]);

export default router;
