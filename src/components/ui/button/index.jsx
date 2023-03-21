import './button.css'

function Button ({btnName, click, bgcolor, color, border}) {
  return(
    <button className='basket-button' style={{ backgroundColor: bgcolor, color: color, border: border}} onClick={click}>{btnName}</button>
  )
}

export default Button;