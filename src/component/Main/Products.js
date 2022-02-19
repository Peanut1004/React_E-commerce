import React from 'react';
import Product from './Product'

function Products(props) {
  const { products } = props;
  return <div className='products'>
    {products.map((product, index) => (
      <Product product={product} key={index}/>
    ))}
  </div>;
}

export default Products;

