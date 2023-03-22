import './card.css'
import { addProductsBasket } from '../../../store/reducers/products';
import { showProductDescription } from '../../../store/reducers/products';
import { removeProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import uuid from 'react-uuid';
import { Link } from "react-router-dom";

function Card({id, img, title, description, full, price, weight}) {
  const [isCardAddedToBasket, setisCardAddedToBasket] = useState(false)
  const dispatch = useDispatch();

  const addProduct = () => {
    const item = {
      id: id,
      idx: uuid(),
      title: title,
      img: img,
      price: price,
      full: full
    }
    dispatch(addProductsBasket(item));
    setisCardAddedToBasket(true);
  }

  let removefromBasket = () => {
    dispatch(removeProductsBasket(id));
    setisCardAddedToBasket(false);
  }

  const renderBasketControlBtn = () => {
    if (isCardAddedToBasket) {
      return <button onClick={removefromBasket} className='card-btn'>-</button>
    } else {
      return <button onClick={addProduct} className='card-btn'>+</button>
    }
  }

  const showDescription = () => {
    const itemDescription = {
      id: id,
      idx: uuid(),
      title: title,
      description: description,
      full: full,
      img: img,
      price: price,
      weight: weight,
    }
    dispatch(showProductDescription(itemDescription));
  }

  return (
    <div className="card">
      <div className='card-wrapper'>
        <Link to={'/description'} onClick={showDescription} className='card-product-container'>
          <img className='card-image' src={img} alt="foodImage" />
          <h1 className='card-title'>{title}</h1>
          <p className='card-subtitle'>{description}</p>
        </Link>
        <div className='card-price'>
          <p>{price} ₽ <span className='card-price-weight'>/ {weight} г.</span></p>
          {renderBasketControlBtn()}
          {/* <button onClick={addProduct} className='card-btn'>+</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card;