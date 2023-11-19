import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css';
import Employee from './Pages/Employee';
import Home from './Pages/Home';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />}>
      <Route path='home' element={<Home />} />
      <Route path='employee' element={<Employee />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
