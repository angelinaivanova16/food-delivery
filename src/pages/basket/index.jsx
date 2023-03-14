import './basket.css'
import CardBasket from '../../components/elements/cardBasket';
// import { products } from '../../products';
import Button from '../../components/ui/button';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Basket () {
  const productsBasket = useSelector( state => state.products.basketProducts)

  return (
    <div className='basket-container'>
      <div className='basket-wrapper'>
        <header className='basket-header'>
          <Link to={'/products'}><div className='basket-arrow'></div></Link>
          <h1 className='basket-title'>Корзина с выбранными товарами</h1>
        </header>

        <main className='basket-list'>
        {productsBasket.map(item => {
            return (
              <CardBasket 
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price} />
            )
          })}
        </main>
      </div>

      <hr className='basket-line' />

      <footer className='basket-footer'>
        <p className='basket-order'>Заказ на сумму: <span className='basket-price'>6 220 ₽</span></p>
        {/* <button className='basket-button'>Оформить заказ</button> */}
        <Button btnName='Оформить заказ'/>
      </footer>
    </div>
  )
}

export default Basket;