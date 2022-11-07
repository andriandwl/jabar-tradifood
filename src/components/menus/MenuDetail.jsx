import React from "react";
import { Link } from "react-router-dom";

function MenuDetail({ imageUrl, title, description, harga, isOnCart }) {
  const [cart, setCart] = React.useState(isOnCart);
  const isOnCarte = () => {
    setCart(isOnCart === 1);
  };
  console.log(cart);
  return (
    <div className="row align-items-md-stretch m-3">
      <div className="col-md-6">
        <img className="rounded-pill" src={imageUrl} alt="detail asinan" />
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3 d-flex justify-center flex-column">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="d-flex">
            <p className="me-3">{harga}</p>
            <input
              className="mt-1"
              type="text"
              placeholder=" 1 "
              style={{ height: "3vh", width: "5vh" }}
            />
          </div>
          <button
            onClick={isOnCarte}
            className="btn btn-outline-secondary h-15 w-50"
            type="button"
          >
            <Link to="/cart">Tambahkan Keranjang</Link>
          </button>
          <button
            className="btn h-15 w-50"
            style={{ backgroundColor: "#90bcab", color: "white" }}
            type="button"
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;
