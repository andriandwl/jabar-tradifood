import React from "react";

function Carousel() {
  return (
    <div className="container text-center">
      <h4>Review Customer</h4>
      <div className="row mx-auto my-auto justify-content-center">
        <div
          id="recipeCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card">
                  <div className="card-img">
                    <img src="" alt="customerImage" className="img-fluid" />
                  </div>
                  <div className="card-img-overlay"></div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
