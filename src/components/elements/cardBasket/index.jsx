import './cardBasket.css'
import { useDispatch } from 'react-redux';
import { removeProductsBasket } from '../../../store/reducers/products';


function CardBasket ({img, title, price, id}) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    console.log('удаление')
    dispatch(removeProductsBasket(id));
  }

  return (
    <div className='card-basket'>
      <img className='card-basket-image' src={img} alt="foodImageBasket" />
      <p className='card-basket-title'>{title}</p>
      <div className='card-basket-rightside'>
        <p className='card-basket-price'>{price}</p>
        <button onClick={removeProduct} className='card-basket-btn'></button>
      </div>
    </div>
  );
}

export default CardBasket;