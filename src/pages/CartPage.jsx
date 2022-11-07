import React from "react";
import { Link } from "react-router-dom";
import asinan from "../assets/image/asinan-bogor.jpg";

function CartPage() {
  // function onCheckout() {
  //   window.location.href("./PaymentPage.jsx");
  // }
  return (
    <>
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Menu</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>

              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img
                  className="rounded-pill"
                  style={{ width: "100px" }}
                  src={asinan}
                  alt="detail asinan"
                />
                <p className="mt-2">Asinan Bogor</p>
              </td>
              <td>Rp.20.000</td>
              <td>1</td>
              <td>Rp.28.000</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="d-flex justify-content-end m-4">
        <Link
          className="btn"
          type="button"
          to="/payment"
          style={{ backgroundColor: "#90bcab", color: "white" }}
        >
          Checkout
        </Link>
      </section>
    </>
  );
}

export default CartPage;
