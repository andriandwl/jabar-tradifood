import React from "react";

function SearchPoetry({ titleSearch, onSearch }) {
  return (
    <div className="poetry-search">
      <input
        type="text"
        placeholder="Cari poetry ..."
        value={titleSearch}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchPoetry;
