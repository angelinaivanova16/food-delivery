import Button from '../../ui/button';
import './cardDescription.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addProductsBasket } from '../../../store/reducers/products';
import { removeProductsBasket } from '../../../store/reducers/products';
import uuid from 'react-uuid';

function CardDescription ({id, img, title, full, price, weight}) {
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
      return <Button btnName='Удалить из корзины' click={removefromBasket}/>
    } else {
      return <Button btnName='В корзину' click={addProduct}/>
    }
  }

  return(
    <div className='card-description'>
      <img className='card-description-image' src={img} alt="foodImage" />
      <div>
        <h2 className='card-description-title'>{title}</h2>
        <p className='card-description-text'>{full}</p>
        <div className='card-description-count'>
          <p className='card-description-price'>{price} ₽ <span className='card-description-weight'>/ {weight} г.</span></p>
          {renderBasketControlBtn()}
        </div>
      </div>
    </div>
  )
}

export default CardDescription;