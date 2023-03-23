import "./formAuthorization.css"

function FormAuthorization () {
  return (
    <form className="form-authorization" action="">
      <p className="form-authorization__subtitle">Зарегистрироваться</p>
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

        <button className="form-authorization__btn" type="submit">
        Войти
        </button>
      </div>
    </form>
  )
}

export default FormAuthorization;