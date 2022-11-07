import React from "react";

function PaymentPage() {
  return (
    <>
      <div className="container m-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Daftar Pesanan</span>
              <span className="badge bg-primary rounded-pill">1</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 className="my-0">Seblak Bandung</h6>
                  <small className="text-muted">Pedas, manis</small>
                </div>
                <span className="text-muted">Rp.20.000</span>
              </li>
              <li className="list-group-item d-flex justify-content-between bg-light">
                <div className="text-success">
                  <h6 className="my-0">Kode Promo</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span className="text-success">Rp.3.000</span>
              </li>
              <li>
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="EXAMPLECODE"
                    />
                    <button type="submit" className="btn btn-secondary">
                      Redeem
                    </button>
                  </div>
                </form>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rupiah)</span>
                <strong>Rp.17.000</strong>
              </li>
            </ul>
            <h4 className="mb-3">Metode Pembayaran</h4>

            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked
                  required
                />
                <label className="form-check-label" for="credit">
                  Gopay
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" for="debit">
                  Ovo
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required
                />
                <label className="form-check-label" for="paypal">
                  M-Banking
                </label>
              </div>
            </div>
            <button
              onclick="bayar()"
              className="w-100 btn btn-primary btn-lg"
              type="submit"
            >
              Bayar
            </button>
          </div>
          <div className="col-md-7 col-lg-8">
            <h1 className="mb-4">Checkout</h1>
            <h4 className="mb-3">Shipping Address</h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-12">
                  <label for="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-md-5">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-3">
                  <label for="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    placeholder=""
                    required
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Phone Number <span className="text-muted"></span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone-number"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
              </div>
              <hr className="my-4" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
