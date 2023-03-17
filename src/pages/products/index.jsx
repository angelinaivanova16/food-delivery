import './products.css'
// import { products } from '../../products';
import Card from '../../components/elements/card';
import { Link } from "react-router-dom";
// import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { addProductsBasket } from '../../store/reducers/products';
// import { useDispatch } from 'react-redux';

function Products () {
  const products = useSelector(state => state.products.products)

  // const [count, setCount] = useState(0);
  // const [countPrice, setCountPrice] = useState(0);

  return (
    <main className="main">
      <div className='container'>
        <header className='header'>
          <h1 className='header-title'>наша продукция</h1>
          <div className="header-basket">
            <div className='header-basket-text'>
              {/* <p>{count} товар(а)</p>
              <p>на сумму {countPrice} ₽</p> */}
              <p>0 товар(а)</p>
              <p>на сумму 0 ₽</p>
            </div>
            <Link to={'/basket'}>
              <div className='header-basket-image'></div>
            </Link>
          </div>
        </header>

        <div className='products-list'>
          {products.map(item => {
            return (
              <Card 
              // click={() => {
              //   setCount(count + 1);
              //   setCountPrice(countPrice + parseInt(item.price.split(/\s+/).join('')));
              // }
              // }           до homework_06 без redux делала так
              key={item.id}
              id={item.id}
              img={item.url}
              title={item.title}
              description={item.description}
              price={item.price}
              weight={item.weight} />
              )
          })}
        </div>
      </div>
    </main>
  )
}

export default Products;