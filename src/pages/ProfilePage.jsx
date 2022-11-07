import React from "react";
import avatar from "../assets/image/ava.jpg";

function ProfilePage({ logout, authedUser }) {
  return (
    <>
      <div className="container">
        <div className="row d-flex gap-2 flex-column">
          <div className="col-12 text-center">
            <img
              src={avatar}
              className="rounded-circle"
              alt="ava"
              style={{ width: "50vh" }}
            />
          </div>
          <div className="col-12 text-center" style={{ fontSize: "24px" }}>
            {authedUser.name}
          </div>
          <div className="col-12 text-center">
            Jl.Tegallega RT.01/02 Kelurahan Tegallega Kecamatan Bogor Tengah
            Kota Bogor, GG.Abah Djajang No.68
          </div>
          <div className="col-12 mb-5 text-center">
            <button
              onClick={logout}
              style={{
                textDecoration: "none",
                border: "none",
                backgroundColor: "transparent",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              Logout
            </button>
          </div>
          <hr />
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 text-center">
                <p>Riwayat Pembelian</p>
              </div>
              <div
                className="col-lg-6 text-center"
                style={{ borderLeft: "2px solid black" }}
              >
                <p>Status Pengiriman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
