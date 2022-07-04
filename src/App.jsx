import React from 'react';
import {Header} from './components/Header/Header';
import {Filter} from './components/Filters/Filter';
import {ProductCard} from './components/ProductCard/ProductCard';

function App() {
  return (
    <>
      <Header />
      <Filter />
      <ProductCard />
    </>
    
  );
}

export default App;
