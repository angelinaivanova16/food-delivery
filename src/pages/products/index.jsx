import './products.css'
import Card from '../../components/elements/card';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Products () {
  const products = useSelector(state => state.products.products);
  const count = useSelector(state => state.products.countProducts);
  const price = useSelector(state => state.products.countPrice);


  return (
    <main className="main">
      <div className='container'>
        <header className='header'>
          <h1 className='header-title'>наша продукция</h1>
          <div className="header-basket">
            <div className='header-basket-text'>
              <p>{count} товар(а)</p>
              <p>на сумму {price} ₽</p>
            </div>
            <Link to={'/basket'}>
              <div className='header-basket-image'></div>
            </Link>
          </div>
        </header>

        <div className='products-list'>
          {products.map(item => {
            return (
              <Card
              key={item.id}
              id={item.id}
              img={item.url}
              title={item.title}
              description={item.description}
              full={item.full}
              price={item.price}
              weight={item.weight} />
              )
          })}
        </div>
      </div>
    </main>
  )
}

export default Products;