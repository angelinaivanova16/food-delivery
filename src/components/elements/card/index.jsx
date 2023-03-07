import './card.css'

function Card({img, title, description, price, weight}) {
  return (
    <div className="card">
      <div className='card-wrapper'>
        <img className='card-image' src={img} alt="foodImage" />
        <h1 className='card-title'>{title}</h1>
        <p className='card-subtitle'>{description}</p>
        <div className='card-price'>
          <p>{price} ₽ <span className='card-price-weight'>/ {weight} г.</span></p>
          <button className='card-btn'>+</button>
        </div>
      </div>
    </div>
  )
}

export default Card;