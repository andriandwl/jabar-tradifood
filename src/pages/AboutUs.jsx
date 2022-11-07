import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid text-center">
          <h1 className="display-5 fw-bold mb-5">Jawa Barat</h1>
          <p className="col-lg-12 fs-4" style={{ textAlign: "center" }}>
            adalah sebuah provinsi di Indonesia, ibu kotanya berada di kota
            Bandung. Pada tahun 2021 penduduk provinsi Jawa Barat berjumlah
            48.782.408 jiwa, dengan kepadatan 1.379 jiwa/km2.Berdasarkan sensus
            BPS pada tahun 2010, penduduk di Jawa Barat merupakan provinsi
            dengan penduduk terbanyak pertama di Indonesia, penduduk aslinya
            merupakan suku Sunda.
          </p>
        </div>
      </div>

      <div className="row m-1 align-items-md-stretch">
        <div className="col-lg-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Masakan</h2>
            <p>
              Makanan khas Jawa Barat mempunyai karakteristiknya sendiri
              misalnya untuk makanan lauk biasanya memiliki rasa yang cederung
              asam dan pedas, menggunakan sayur mentah sebagai pendamping atau
              lalapan, banyak masakan yang menggunakan ikan,
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mapouter rounded-2">
            <div className="gmap_canvas">
              <iframe
                width="100%"
                height="300"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=west%20java&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                title="caurra"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
