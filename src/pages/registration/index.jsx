import './registration.css'
import { Link } from 'react-router-dom';

function checkFormRegistration(e) {
  const fieldLogin = document.getElementById('login');
  const fieldPassword = document.getElementById('password')
  const notification1 = document.getElementById('notification1');
  const notification2 = document.getElementById('notification2');
  // const btn = document.querySelector('.form-registration__btn');
  let hasEmpty = false; // Поля заполнены - это у нас будет false

  if(!fieldLogin.value) {   // если это пустое поле,
    notification1.textContent = 'Поле не должно быть пустым';
    // btn.classList.add('higher');
    hasEmpty = true;   // тогда true - значит поле пустое
  } else if(fieldLogin.value.length < 4) {
    notification1.textContent = 'Логин должен содержать не менее 4-х символов';
    // btn.classList.add('higher');
    hasEmpty = true;
  } else {
    notification1.textContent = '';
  }

  if(!fieldPassword.value) {
    notification2.textContent = 'Поле не должно быть пустым';
    hasEmpty = true;
  } else if(fieldPassword.value.length < 4) {
    notification2.textContent = 'Пароль должен содержать не менее 4-х символов';
    hasEmpty = true;
  } else {
    notification2.textContent = '';
  }

  if(hasEmpty) {   // Если что-то не заполнено или неверно, то НЕ отправляем форму
    e.preventDefault()   
  }

  if(!hasEmpty) {     // Если все поля заполнены (hasEmpty = false), то сохраняем массив объектов с данными.
    let obj = {
      login: fieldLogin.value,
      password: fieldPassword.value,
    };

    let currentArr = JSON.parse(localStorage.getItem("users")); // По ключу users будем смотреть, есть ли уже что-то в localStorage
    if (currentArr == null) {
      let arr = [];
      arr.push(obj);
      localStorage.setItem('users', JSON.stringify(arr));
    } else {
      console.log(currentArr)
      currentArr.push(obj)
      localStorage.setItem('users', JSON.stringify(currentArr));
    }
  }
}


function Registration () {
  return (
    <div className='registration-container'>
      <form className="form-registration" action="">
        <Link to={'/authorization'}>
          <p className="form-registration__subtitle">Авторизоваться</p>
        </Link>
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

          <button className="form-registration__btn" type="submit" onClick={checkFormRegistration}>
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration;