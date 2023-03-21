import Button from '../../ui/button';
import './cardDescription.css'
import { useDispatch } from 'react-redux';
import { addProductsBasket } from '../../../store/reducers/products';
import uuid from 'react-uuid';

function CardDescription ({id, img, title, full, price, weight}) {
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
  }

  return(
    <div className='card-description'>
      <img className='card-description-image' src={img} alt="foodImage" />
      <div>
        <h2 className='card-description-title'>{title}</h2>
        <p className='card-description-text'>{full}</p>
        <div className='card-description-count'>
          <p className='card-description-price'>{price} ₽ <span className='card-description-weight'>/ {weight} г.</span></p>
          <Button btnName='В корзину' click={addProduct}/>
        </div>
      </div>
    </div>
  )
}

export default CardDescription;