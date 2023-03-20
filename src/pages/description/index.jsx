import './description.css'
import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';

function Description () {
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
      </div>
    </div>
  )
}

export default Description;