import Button from '../../ui/button';
import './cardDescription.css'

function CardDescription ({img, title, full, price, weight}) {
  // console.log(full);
  return(
    <div className='card-description'>
      <img className='card-description-image' src={img} alt="foodImage" />
      <div>
        <h2 className='card-description-title'>{title}</h2>
        <p className='card-description-text'>{full}</p>
        <div>
          <p>{price} ₽ <span className='card-price-weight'>/ {weight} г.</span></p>
          <Button>В корзину</Button>
        </div>
      </div>
    </div>
  )
}

export default CardDescription;