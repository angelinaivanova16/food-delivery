import './authorization.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function checkFormAuthorization(e) {
  const fieldLogin2 = document.getElementById('login');
  const fieldPassword2 = document.getElementById('password')
  const notification1_2 = document.getElementById('notification1');
  const notification2_2 = document.getElementById('notification2');
  const notification3 = document.getElementById('notification3');
  // const btn = document.querySelector('.form-registration__btn');
  let hasEmpty = false; // Поля заполнены - это у нас будет false

  if(!fieldLogin2.value) {   // если это пустое поле,
    notification1_2.textContent = 'Поле не должно быть пустым';
    // btn.classList.add('higher');
    hasEmpty = true;   // тогда true - значит поле пустое
  } else {
    notification1_2.textContent = '';
  }

  if(!fieldPassword2.value) {
    notification2_2.textContent = 'Поле не должно быть пустым';
    hasEmpty = true;
  } else {
    notification2_2.textContent = '';
  }

  if(!hasEmpty) {   // Если что-то не заполнено или неверно, то НЕ отправляем форму
    e.preventDefault();
    let obj2 = {
      login: fieldLogin2.value,
      password: fieldPassword2.value,
    };

    let currentArr2 = JSON.parse(localStorage.getItem("users")); // Записываем в currentArr2 наш массив с данными из localStorage
    // Объект с объектом не сравниваются обычным способом, так как это ссылочный тип данных, поэтому сконвертируем в строки
    if (JSON.stringify(currentArr2).includes(JSON.stringify(obj2))) {
      window.location.href = '/products';
    } else {
      notification3.textContent = 'Логин или пароль неверен';
    }   
  }
}




function Authorization () {
  return (
    <div className='authorization-container'>
      <form className="form-authorization" action="">
        <Link to={'/registration'}>
          <p className="form-authorization__subtitle">Зарегистрироваться</p>
        </Link>
        <div className="form-authorization__wrapper">
          <h1 className="form-authorization__title">вход</h1>
          <input
              className="form-authorization__item"
              type="text"
              placeholder="Логин"
              id="login"
            />
          <p className="form-authorization__notification" id="notification1"></p>
          <input
              className="form-authorization__item"
              type="password"
              placeholder="Пароль"
              id="password"
            />
          <p className="form-authorization__notification" id="notification2"></p>

          <div className="form-authorization__agreement">
            <input
              className="form-authorization__item_checkbox"
              type="checkbox"
              id="agree"
            />
            <label htmlFor="agree">
              <div className="form-authorization__agree">
                Я согласен получать обновления на почту
              </div>
            </label>
          </div>
          <p className="form-authorization__notification" id="notification3"></p>

          <button className="form-authorization__btn" type="submit" onClick={checkFormAuthorization}>
          Войти
          </button>
        </div>
      </form>
    </div>
  )
}

export default Authorization;