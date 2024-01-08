import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Products from './pages/products'
import Basket from './pages/basket'
import Description from './pages/description';
import Authorization from './pages/authorization';
import Registration from './pages/registration';
import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import { HashRouter, Routes, Route } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/products",
//     element: <Products />,
//   },
//   {
//     path: "/basket",
//     element: <Basket />,
//   },
//   {
//     path: "/description",
//     element: <Description />,
//   },
//   {
//     path: "/authorization",
//     element: <Authorization />,
//   },
//   {
//     path: "/registration",
//     element: <Registration />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Provider store={store}>
        <Routes>
          <Route
              path="/"
              element={ <App /> }
            />
            <Route
              path="/products"
              element={ <Products /> }
            />
            <Route
              path="/basket"
              element={ <Basket /> }
            />
            <Route
              path="/description"
              element={ <Description /> }
            />
            <Route
              path="/authorization"
              element={ <Authorization /> }
            />
            <Route
              path="/registration"
              element={ <Registration /> }
            />
        </Routes>
        {/* <RouterProvider router={router} /> */}
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
