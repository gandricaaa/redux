import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
// router
import { createBrowserRouter } from 'react-router-dom';
// pages
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import { RouterProvider } from 'react-router';
import SinglePage from './pages/SinglePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
const router = createBrowserRouter([
	{
		path : '/',
		element : <App />,
		children : [
			{
				path: '/',
				element : <HomePage/>
			},
			{
				path: '/products',
				element : <ProductsPage/>
			},
			{
				path : '/singleProduct/:id',
				element : <SinglePage/>
			},
			{
				path : '/register',
				element : <RegisterPage/>
			}
		]
	}
])
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
