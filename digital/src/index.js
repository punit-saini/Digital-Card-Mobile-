import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const root = document.getElementById('root');
ReactDOM.render(
  <div className='container'>
    <Header/>
    <Main/>
    <Footer/>
  </div>
  , root);


