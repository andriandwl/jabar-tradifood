import React from "react";
import img1 from "../../assets/image/1.png";
import img2 from "../../assets/image/2.png";
import img3 from "../../assets/image/3.png";
import img4 from "../../assets/image/4.png";
import img5 from "../../assets/image/5.png";
import img6 from "../../assets/image/6.png";

function SectionLove() {
  return (
    <div>
      <div className="row m-3 px-4 py-1">
        <div className="col-lg-7">
          <div className="p-5 mb-4 bg-transparent rounded-3">
            <div className="container-fluid">
              <h1
                className="display-2 fw-bold"
                id="love"
                style={{ color: "#90bcab" }}
              >
                Love Food
              </h1>
              <h1
                className="display-2 fw-bold"
                id="good"
                style={{ color: "#90bcab" }}
              >
                So Good
              </h1>
              <p
                className="col-md-12 mb-5 fs-5"
                style={{ textAlign: "justify; color: #90bcab" }}
              >
                Masakan kreasi masyarakat Sunda terutama di wilayah barat daya
                kepulauan Indonesia. Ini adalah salah salah satu makanan yang
                paling populer di Indonesia. Makanan Sunda memiliki ciri
                kesegaran bahannya, lalap terkenal dimakan dengan sambal dan
                juga karedok menunjukkan kegemaran orang Sunda terhadap sayuran
                mentah segar. Berbeda dengan masakan Minangkabau, Masakan Aceh,
                maupun Masakan Gorontalo yang kaya rasa dan pedas dengan
                kandungan santan yang kental atau bumbu kari yang gurih.
              </p>
              <button
                className="btn btn-lg"
                style={{ color: "white", backgroundColor: "#90bcab" }}
                type="button"
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row m-2">
            <div className="col-lg-3">
              <div
                className="card bg-transparent border-light rounded-3"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img1} alt="love sec" />
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card bg-transparent border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img2} alt="love sec" />
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card bg-transparent border-1 border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img
                  className="card-img-top border-1"
                  src={img1}
                  alt="love sec"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="card bg-transparent border-1 border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img2} alt="love sec" />
              </div>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <div
                className="card bg-transparent border-1 border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img3} alt="love sec" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card bg-transparent border-1 border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img4} alt="love sec" />
              </div>
            </div>
          </div>
          <div className="row m-2">
            <div className="col-lg-6">
              <div
                className="card bg-transparent border-1 border-light rounded-3"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img5} alt="love sec" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="card bg-transparent border-1 border-light rounded-4"
                style={{ boxShadow: "5px 5px 4px #90bcab" }}
              >
                <img className="card-img-top" src={img6} alt="love sec" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLove;
