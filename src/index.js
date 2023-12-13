import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Header from './Header.js';
import Form from './Form.js';
import AllQuestion from './AllQuestion.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path ="/Form" element ={<Form/>}></Route>
    <Route path ="/AllQuestion" element ={<AllQuestion/>}></Route>


  </Routes>
  
  </BrowserRouter>
  
);

