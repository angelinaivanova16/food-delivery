import './products.css'
import { products } from '../../products';
import Card from '../../components/elements/card';

function Products () {
  return (
    <main className="main">
      <div className='container'>
        <header className='header'>
          <h1 className='header-title'>наша продукция</h1>
          <div className="header-basket">
            <div className='header-basket-text'>
              <p>3 товара</p>
              <p>на сумму 3 500 ₽</p>
            </div>
            <div className='header-basket-image'></div>
          </div>
        </header>

        <div className='products-list'>
          {products.map(item => {
            return (
              <Card 
              key={item.id}
              img={item.url}
              title={item.title}
              description={item.description}
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