import './button.css'

function Button ({btnName, click}) {
  return(
    <button className='basket-button' onClick={click}>{btnName}</button>
  )
}

export default Button;