import React from "react";
import { Link } from "react-router-dom";

function MainContent({ id, imageUrl, title, description }) {
  return (
    <div className="col-lg-3">
      <div className="card shadow-sms" style={{ height: "65vh" }}>
        <img
          src={imageUrl}
          height="225"
          width="100%"
          alt="logo"
          className="bd-placeholder-img card-img-top"
        />
        <div className="card-body">
          <p className="card-text h4">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                onClick={() => console.log(id)}
                className="btn btn-sm btn-outline-secondary"
              >
                <Link
                  to={`/menu/${id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Pesan
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
