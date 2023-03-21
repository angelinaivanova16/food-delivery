import './basket.css'
import CardBasket from '../../components/elements/cardBasket';
import Button from '../../components/ui/button';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Basket () {
  const productsBasket = useSelector( state => state.products.basketProducts);
  const price = useSelector( state => state.products.countPrice);

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
              key={item.idx}
              id={item.idx}
              img={item.img}
              title={item.title}
              full={item.full}
              price={item.price}
              weight={item.weight} />
            )
          })}
        </main>
      </div>

      <hr className='basket-line' />

      <footer className='basket-footer'>
        <p className='basket-order'>Заказ на сумму: <span className='basket-price'>{price}</span></p>
        <Button btnName='Оформить заказ'/>
      </footer>
    </div>
  )
}

export default Basket;