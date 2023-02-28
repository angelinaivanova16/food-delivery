import './card.css'

function Card({title, description, price, weight}) {
  return (
    <div className="">
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <p>{price} ₽ / {weight} г.</p>
        <button>+</button>
      </div>
    </div>
  )
}

export default Card;