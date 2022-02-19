import React, { useEffect, useState } from 'react';
import Products from './Products'
import ResulTop from './ResulTop';

function Main(props) {
  const { valueSearch, valueTitle } = props;
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('');

  const handleSort = (value) => {
    setSort(value)
  }

  useEffect(() => {
    let url = `http://localhost:3000/products?`;

    if(valueSearch) {
      url += `q=${valueSearch}`
    }

    if(valueTitle) {
      url += `&title=${valueTitle}`;
    }

    if(sort) {
      url += `&_sort=price&_order=${sort}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(result => setProducts(result))
  }, [sort, valueSearch, valueTitle])

  return (
    <div className='main'>
      <ResulTop products={products} handleSort={handleSort} />
      <Products products={products} />
    </div>
  )
}

export default Main;

