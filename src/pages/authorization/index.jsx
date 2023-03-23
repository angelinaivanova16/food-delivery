import './authorization.css'

function Authorization () {
  return (
    <div className='authorization-container'>
      <form class="form-registration" action="">
      <p class="form-registration__subtitle">Авторизоваться</p>
      <div class="form-registration__wrapper">
        <h1 class="form-registration__title">pегистрация</h1>
        <input
            class="form-registration__item"
            type="text"
            placeholder="Логин"
            id="login"
          />
        <p class="form-registration__notification" id="notification1"></p>
        <input
            class="form-registration__item"
            type="password"
            placeholder="Пароль"
            id="password"
          />
        <p class="form-registration__notification" id="notification2"></p>

        <div class="form-registration__agreement">
          <input
            class="form-registration__item_checkbox"
            type="checkbox"
            id="agree"
          />
          <label for="agree">
            <div class="form-registration__agree">
              Я согласен получать обновления на почту
            </div>
          </label>
        </div>
        <p class="form-registration__notification" id="notification3"></p>

        <button class="form-registration__btn" type="submit">
          Зарегистрироваться
        </button>
      </div>
    </form>
    </div>
  )
}

export default Authorization;