import Button from '../../ui/button';
import './cardDescription.css'

function CardDescription ({img, title, full, price, weight}) {
  return(
    <div className='card-description'>
      <img className='card-description-image' src={img} alt="foodImage" />
      <div>
        <h2 className='card-description-title'>{title}</h2>
        <p className='card-description-text'>{full}</p>
        <div className='card-description-count'>
          <p className='card-description-price'>{price} ₽ <span className='card-description-weight'>/ {weight} г.</span></p>
          <Button btnName='В корзину'/>
        </div>
      </div>
    </div>
  )
}

export default CardDescription;