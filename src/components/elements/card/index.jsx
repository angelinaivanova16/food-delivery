import './card.css'
import { addProductsBasket } from '../../../store/reducers/products';
import { useDispatch } from 'react-redux';

function Card({img, title, description, price, weight, click, id}) {
  const dispatch = useDispatch();

  const addProduct = () => {
    const item = {
      id: id,
      title: title,
      urlImg: img,
      price: price
    }

    dispatch(addProductsBasket(item));
  }

  return (
    <div className="card">
      <div className='card-wrapper'>
        <img className='card-image' src={img} alt="foodImage" />
        <h1 className='card-title'>{title}</h1>
        <p className='card-subtitle'>{description}</p>
        <div className='card-price'>
          <p>{price} ₽ <span className='card-price-weight'>/ {weight} г.</span></p>
          <button onClick={click} className='card-btn'>+</button>
          {/* <button onClick={addProduct} className='card-btn'>+</button> */}
        </div>
      </div>
    </div>
  )
}

export default Card;
// export default { addProduct };
