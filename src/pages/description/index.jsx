import './description.css'
import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import CardDescription from '../../components/elements/cardDescription';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearProductDescription } from '../../store/reducers/products';

function Description () {
  const productDescr = useSelector( state => state.products.descriptionProduct);
  const count = useSelector(state => state.products.countProducts);
  const price = useSelector( state => state.products.countPrice);

  const dispatch = useDispatch();

  const clearDescription = () => {
    dispatch(clearProductDescription());
  }


  return (
    <div className='description-container'>
      <div className='description-wrapper'>
        <header className='description-header'>
          <Link to={'/products'} onClick={clearDescription}><div className='basket-arrow'></div></Link>
          <div className='description-rightside'>
            <div className='header-description-text'>
              <p>{count} товар(а)</p>
              <p>на сумму {price} ₽</p>
            </div>
            <Link to={'/basket'} onClick={clearDescription}>
              <div className='header-basket-image'></div>
              {/* <div className='description-image'></div> */}
            </Link>
            <Button btnName='Выйти' bgcolor="transparent" color="#D58C51" border="1px solid #D58C51"/>
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