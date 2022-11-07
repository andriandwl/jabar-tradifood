import React from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/image/1-2.jpg";
import img2 from "../assets/image/1.jpg";
import img3 from "../assets/image/1-3.jpg";
import { register } from "../utils/api";

function Register() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const onEmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const onPasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onRegisterHandler = async (e) => {
    e.preventDefault();
    const { error } = await register({
      name: name,
      email: email,
      password: password,
    });

    if (!error) {
      navigate("/login");
    }
  };
  return (
    <>
      <main>
        <div className="container col-xl-10 col-xxl-8 px-1 py-1">
          <div className="row align-items-center g-lg-5 py-2">
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
              <h1 className="text-center pb-3">Sign up</h1>
              <form
                className="p-4 p-md-5 border rounded-3 bg-light"
                method="post"
                onSubmit={onRegisterHandler}
                encType="multipart/form-data"
                id="form-input__register"
              >
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    onChange={onNameChangeHandler}
                    id="input-nama"
                    name="input-nama"
                    placeholder="name@example.com"
                  />
                  <label>Nama</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    onChange={onEmailChangeHandler}
                    className="form-control"
                    id="input-email"
                    placeholder="email"
                  />
                  <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="input-alamat"
                    className="form-control"
                    id="input-alamat"
                    placeholder="name@example.com"
                  />
                  <label>Alamat</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="input-nomer"
                    placeholder="name@example.com"
                  />
                  <label>Nomer Telephone</label>
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
                  id="btn-register"
                  name="input-password"
                  className="w-100 btn btn-lg"
                  style={{ color: "white", backgroundColor: "#90bcab" }}
                  type="submit"
                >
                  Sign up
                </button>
                <hr className="my-4" />
                <small className="text-muted">
                  Already Have Account? Please
                  <Link style={{ color: "#90bcab" }} to="/login">
                    Login
                  </Link>
                </small>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Register;
