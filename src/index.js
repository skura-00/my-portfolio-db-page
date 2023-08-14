//reference: https://www.youtube.com/watch?v=GC1LcEwTtZo

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storage } from './storage/storage'; 
import './index.css';
import App from './App';
import Insert from './childPages/js/insert';
import Select from './childPages/js/selectMember';
import Select2 from './childPages/js/selectClub';
import Layout from './layouts/Layout';
import Error from './childPages/js/error';

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<App />}></Route>
      <Route path='/insert' element={<Insert />}></Route>
      <Route path='/select' element={<Select />}></Route>
      <Route path='/select2' element={<Select2 />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Route>
    
  )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ storage }>
      <RouterProvider router={ router } />
    </Provider>
  </React.StrictMode>
);

