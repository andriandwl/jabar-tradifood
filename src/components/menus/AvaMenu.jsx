import React from "react";
import img1 from "../../assets/image/1.png";
import img2 from "../../assets/image/2.png";
import img3 from "../../assets/image/3.png";
import img4 from "../../assets/image/4.png";
import img5 from "../../assets/image/5.png";
import img6 from "../../assets/image/6.png";

function AvaMenu() {
  return (
    <div className="container">
      <div className="row m-2 text-center">
        <p className="h2 mb-5" style={{ color: "#90bcab" }}>
          Jawa Barat Traditional Food
        </p>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img1} alt="card ava" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img2} alt="card ava" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img3} alt="card ava" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img4} alt="card ava" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img5} alt="card ava" />
          </div>
        </div>
        <div className="col-lg-2">
          <div className="card bg-transparent border-0">
            <img className="card-img-top" src={img6} alt="card ava" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvaMenu;
