import './basket.css'

function Basket () {
  return (
    <main className='basket-main'>
      <header>
        <div className='basket-arrow'></div>
        <h1 className='basket-title'>Корзина с выбранными товарами</h1>
      </header>

      <div className='basket-list'></div>

      <footer>
        <hr className='basket-line' />
        <p className='basket-order'>Заказ на сумму: <span>6 220 ₽</span></p>
        <button className='basket-button'>Оформить заказ</button>
      </footer>
    </main>
  )
}

export default Basket;