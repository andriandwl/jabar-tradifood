import React from "react";

function Filter() {
  return (
    <div
      className="row align-items-center m-3 px-4 py-2 rounded-3"
      style={{ backgroundColor: "#90bcab" }}
    >
      <div className="col-lg-12 d-flex justify-content-between ms-2">
        <div className="col-lg-10 d-flex gap-2 mt-2 rounded-2">
          <p className="text-light mt-2">FILTER :</p>
          <select
            defaultValue={"DEFAULT"}
            className="form-select mt-1"
            style={{ width: "25vh", height: "5vh" }}
            aria-label="Default select example"
          >
            <option value="DEFAULT" disabled>
              Semua Masakan
            </option>
            <option value="1">Bogor</option>
            <option value="2">Bandung</option>
            <option value="3">Cianjur</option>
            <option value="4">Subang</option>
            <option value="5">Sumedang</option>
          </select>
        </div>
        <div className="col-lg-2 m-2">
          <form className="col-lg-auto mb-lg-0" role="search">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
