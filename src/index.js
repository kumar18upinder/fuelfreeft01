import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';


const root1 = ReactDOM.createRoot(document.getElementById("root"));

root1.render(
 <BrowserRouter>
    <App/>
 </BrowserRouter>
);


