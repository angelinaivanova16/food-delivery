import './basket.css'

function Basket () {
  return (
    <div className='basket-container'>
      <div className='basket-wrapper'>
        <header className='basket-header'>
          <div className='basket-arrow'></div>
          <h1 className='basket-title'>Корзина с выбранными товарами</h1>
        </header>

        <main className='basket-list'></main>
      </div>

      <hr className='basket-line' />

      <footer className='basket-footer'>
        <p className='basket-order'>Заказ на сумму: <span className='basket-price'>6 220 ₽</span></p>
        <button className='basket-button'>Оформить заказ</button>
      </footer>
    </div>
  )
}

export default Basket;