import './registration.css'
import { Link } from 'react-router-dom';

function Registration () {
  return (
    <div className='registration-container'>
      <form className="form-registration" action="">
        <Link to={'/authorization'}>
          <p className="form-registration__subtitle">Авторизоваться</p>
        </Link>
        {/* <p className="form-registration__subtitle">Авторизоваться</p> */}
        <div className="form-registration__wrapper">
          <h1 className="form-registration__title">pегистрация</h1>
          <input
              className="form-registration__item"
              type="text"
              placeholder="Логин"
              id="login"
            />
          <p className="form-registration__notification" id="notification1"></p>
          <input
              className="form-registration__item"
              type="password"
              placeholder="Пароль"
              id="password"
            />
          <p className="form-registration__notification" id="notification2"></p>

          <div className="form-registration__agreement">
            <input
              className="form-registration__item_checkbox"
              type="checkbox"
              id="agree"
            />
            <label htmlFor="agree">
              <div className="form-registration__agree">
                Я согласен получать обновления на почту
              </div>
            </label>
          </div>
          <p className="form-registration__notification" id="notification3"></p>

          <button className="form-registration__btn" type="submit">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration;