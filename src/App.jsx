// import { useState } from 'react'
import './App.css'
import productpic from './assets/images/logi.jpeg'
import ProductPage from './components/ProductPage';


const App = () => {
  return (
    <ProductPage title='Logitech K380' category='Keyboard' picture={productpic} price='1200'/>
  );
};

export default App;
