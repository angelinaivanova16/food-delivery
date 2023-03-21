import './description.css'
import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import CardDescription from '../../components/elements/cardDescription';
import { useSelector } from 'react-redux';

function Description () {
  const productDescr = useSelector( state => state.products.descriptionProduct);

  return (
    <div className='description-container'>
      <div className='description-wrapper'>
        <header className='description-header'>
          <Link to={'/products'}><div className='basket-arrow'></div></Link>
          <div className='description-rightside'>
            <div className='header-description-text'>
              <p>0 товар(а)</p>
              <p>на сумму 0 ₽</p>
            </div>
            <Link to={'/basket'}>
              <div className='header-basket-image'></div>
            </Link>
            <Button btnName='Выйти'/>
          </div>
        </header>

        <main className='description-item'>
        {productDescr.map(item => {
            return (
              <CardDescription
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
    </div>
  )
}

export default Description;