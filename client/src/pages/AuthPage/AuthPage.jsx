import React, { useState } from "react";
import "./AuthPage.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
function AuthPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  };

  const registerHandler = async () => {
    try {
      await axios
        .post(
          "/api/auth/registration",
          { ...form },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => console.log(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BrowserRouter>
      <Switch>
        <>
          <div className="container">
            <div className="auth-page">
              <Route path="/login">
                <h3>Авторизация</h3>
                <form
                  className="form form-login"
                  action=""
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="validate"
                        type="email"
                        name="email"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        className="validate"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="wawes-effect wawes-light btn btn blue">
                      Войти
                    </button>
                    <Link className="btn-outline btn-reg" to="/registration">
                      Нет аккаунта?
                    </Link>
                  </div>
                </form>
              </Route>

              <Route path="/registration">
                <h3>Регистрация</h3>
                <form
                  className="form form-login"
                  action=""
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        className="validate"
                        type="email"
                        name="email"
                        onChange={changeHandler}
                      />
                      <label htmlFor="email">E-mail</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        className="validate"
                        type="password"
                        name="password"
                        onChange={changeHandler}
                      />
                      <label htmlFor="password">Пароль</label>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      onClick={registerHandler}
                      className="wawes-effect wawes-light btn btn blue"
                    >
                      Регистрация
                    </button>
                    <Link className="btn-outline btn-reg" to="/login">
                      Уже есть аккаунт?
                    </Link>
                  </div>
                </form>
              </Route>
            </div>
          </div>
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default AuthPage;
