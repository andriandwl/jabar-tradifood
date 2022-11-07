import React from "react";
import { Link } from "react-router-dom";

function Recomendation({ menus }) {
  console.log(menus.title);
  return (
    <>
      <div
        className="row m-4 border-bottom border-top rounded-2 d-flex"
        style={{ color: "white", backgroundColor: "#90bcab" }}
      >
        <div className="col-lg-10 mt-3">
          <p style={{ fontSize: "1.5em" }}>Rekomendasi Masakan</p>
        </div>
        <div className="col-lg-2 mt-3">
          <form className="col-lg-12" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <div className="row m-3">
        {menus.map((menu) => (
          <div className="col-lg-2">
            <div className="card bg-transparent">
              <img
                className="card-img-top"
                style={{ position: "relative", width: "30vh", height: "25vh" }}
                src={menu.imageUrl}
                alt="reco food"
              />
              <div className="card-body" style={{ color: "#90bcab" }}>
                <h5 className="card-title">{menu.title}</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Rating : {menu.rating}
                </p>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Cabang : {menu.cabang}
                </p>
                <Link
                  to={`/menu/${menu.id}`}
                  className="btn rounded-pill border"
                  style={{
                    backgroundColor: "#90bcab",
                    color: "white",
                    boxShadow: "1px 5px",
                  }}
                >
                  Pesan
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Recomendation;
