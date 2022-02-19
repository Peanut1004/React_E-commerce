import React, { useEffect, useState } from 'react';
import RefineByType from './RefineByType';
import ShowResultFor from './ShowResultFor';

function Menu(props) {
  const { handleTitle } = props;

  const [type, setType] = useState([])

  useEffect(() => {
    let url = 'http://localhost:3000/types';
    fetch(url)
      .then(res => res.json())
      .then(result => setType(result))
  }, [])

  return (
    <div className='menu'>
      <div className='menu__clear'></div>
      <div className="menu__result">
        <p className="menu__title-1">Show results for</p>
        <ShowResultFor type={type} handleTitle={handleTitle}/>
      </div>
      <hr></hr>
      <div className="menu__refine">
        <p className="menu__title-1">Refine by</p>
        <p className="menu__title-2">Type</p>
        <RefineByType />
        <p className="menu__title-2">Brand</p>

        <p className="menu__title-2">Ratings</p>

        <p className="menu__title-2">Prices</p>
      </div>
      <hr></hr>
      <div className="menu__text">Data courtesy of Best Buy</div>
    </div>
  );
}

export default Menu;
