import React from "react";
import imgBandung from "../../assets/image/band.jpg";
import logoBandung from "../../assets/image/Lambang_Kota_Bandung.svg.png";
import imgBogor from "../../assets/image/back-5.jpg";
import logoBogor from "../../assets/image/Emblem_of_Bogor.svg.png";
import imgCianjur from "../../assets/image/cian.jpg";
import logoCianjur from "../../assets/image/Lambang_Kabupaten_Cianjur.svg.png";
import imgSubang from "../../assets/image/sub.webp";
import logoSubang from "../../assets/image/Seal_of_Subang_Regency.svg.png";
import imgSumedang from "../../assets/image/sume.jpg";
import logoSumedang from "../../assets/image/Lambang_Kabupaten_Sumedang.png";

function Cabang() {
  return (
    <div className="row m-4">
      <div
        className="col-lg-12 border-top border-bottom rounded-2"
        style={{ backgroundColor: "#90bcab", color: "white" }}
      >
        <p style={{ fontSize: "1.5em" }} className="mt-2">
          Cabang
        </p>
      </div>
      <div className="col-lg-12 mt-4">
        <div className="row g-4">
          <div className="col-lg-3">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${imgBandung})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Bandung
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={logoBandung}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${imgBogor})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h4 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Bogor</h4>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={logoBogor}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${imgCianjur})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h4 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Cianjur</h4>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={logoCianjur}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${imgSubang})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h4 className="pt-5 mt-5 mb-4 lh-1 fw-bold">Subang</h4>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={logoSubang}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{ backgroundImage: `url(${imgSumedang})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Sumedang
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src={logoSumedang}
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cabang;
