import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import { Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Listing from './views/Listing';
import NewListing from './views/NewListing';
import Login from './views/Login';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/listings/:id' element={<Listing />} />
          <Route exact path='listings/new' element={<NewListing />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
