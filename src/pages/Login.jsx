import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/image/1-2.jpg";
import img2 from "../assets/image/1.jpg";
import img3 from "../assets/image/1-3.jpg";
import { login } from "../utils/api";

function Login({ loginSuccess }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  async function onLogin(event) {
    event.preventDefault();
    console.log(loginSuccess);
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }
  return (
    <>
      <div className="container col-xl-10 col-xxl-8 px-5 py-5">
        <div className="row align-items-center g-lg-5">
          <div className="col-lg-7 text-center text-lg-start">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img1}
                    className="d-block w-100 rounded-pill"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={img2}
                    className="d-block w-100 rounded-pill"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={img3}
                    className="d-block w-100 rounded-pill"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <h1 className="text-center mb-4">Sign in</h1>
            <form
              onSubmit={onLogin}
              id="form-input__login"
              className="p-4 p-md-5 border rounded-3"
            >
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  onChange={onEmailChangeHandler}
                  id="input-email"
                  placeholder="name@example.com"
                />
                <label>Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  onChange={onPasswordChangeHandler}
                  id="input-password"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>
              <button
                id="btn-signin"
                className="w-100 btn btn-lg"
                style={{ backgroundColor: "#90bcab", color: "white" }}
                type="submit"
              >
                Sign in
              </button>
              <hr className="my-4" />
              <small className="text-muted text-center">
                Don't Have An Account? Please
                <Link style={{ color: "#90bcab" }} to="/register">
                  Register
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
