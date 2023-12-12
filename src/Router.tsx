import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import About from './screens/About';
import Root from './Root';

// Router를 Array 형식으로 표현(-> JS Object 형식)
const router = createBrowserRouter([
	{
		// 첫페이지 = 전체 Router들의 container
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'about',
				element: <About />
			},
		]
	}
]);

export default router;
