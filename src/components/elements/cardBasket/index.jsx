import './cardBasket.css'

function CardBasket ({img, title, price}) {
  return (
    <div className='card-basket'>
      <img className='card-basket-image' src={img} alt="foodImageBasket" />
      <p className='card-basket-title'>{title}</p>
      <div className='card-basket-rightside'>
        <p className='card-basket-price'>{price}</p>
        <button className='card-basket-btn'></button>
      </div>
    </div>
  );
}

export default CardBasket;