// import { useState } from 'react'
import './App.css'
import productpic from './assets/images/logi.jpeg'
import ProductPage from './components/ProductPage';


const App = () => {
  return (
    <>
    <ProductPage title='Logitech K380' category='Keyboard' picture={productpic} price='1200'/>
    <ProductPage title='Logitech K380' category='Keyboard' picture={productpic} price='2400'/>
    <ProductPage title='Logitech K380' category='Keyboard' picture={productpic} price='2500'/>
    <ProductPage title='Logitech K380' category='Keyboard' picture={productpic} price='2700'/>
    </>
  );
};

export default App;
