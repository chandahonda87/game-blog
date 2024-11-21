import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Protected from './components/AuthLayout';
import Home from './pages/Home';
import Art from './pages/Art';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Review from './reviews/Review';
import { ActiveContentProvider } from './ActiveContentContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/art',
        element: (
          <Protected authentication>
            <Art />
          </Protected>
        )
      },
      {
        path: '/blog',
        element: (
          <Protected authentication>
            <Blog />
          </Protected>
        )
      },
      {
        path: '/login',
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        )
      },
      {
        path: '/signup',
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        )
      },
      {
        path: '/review',
        element: (
          <Protected authentication={false}>
            <Review />
          </Protected>
        )
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ActiveContentProvider>
      <RouterProvider router={router} />
      </ActiveContentProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
