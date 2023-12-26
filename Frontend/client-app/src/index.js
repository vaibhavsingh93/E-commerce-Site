import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainPageHome from './MainPageHome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <MainPageHome/>
   </BrowserRouter>
);


