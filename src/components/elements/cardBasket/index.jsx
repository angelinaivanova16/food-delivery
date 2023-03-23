import './cardBasket.css'
import { useDispatch } from 'react-redux';
import { removeProductsBasket } from '../../../store/reducers/products';
import { Link } from "react-router-dom";
import uuid from 'react-uuid';
import { showProductDescription } from '../../../store/reducers/products';


function CardBasket ({img, title, full, price, weight, id}) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeProductsBasket(id));
  }

  const showDescription = () => {
    const itemDes = {
      id: id,
      idx: uuid(),
      title: title,
      full: full,
      img: img,
      price: price,
      weight: weight,
    }
    
    dispatch(showProductDescription(itemDes));
  }

  return (
    <div className='card-basket'>
      <img className='card-basket-image' src={img} alt="foodImageBasket" />
      <Link to={'/description'} onClick={showDescription} className='card-basket-link'>
        <p className='card-basket-title'>{title}</p>
      </Link>
      <div className='card-basket-rightside'>
        <p className='card-basket-price'>{price}</p>
        <button onClick={removeProduct} className='card-basket-btn'></button>
      </div>
    </div>
  );
}

export default CardBasket;