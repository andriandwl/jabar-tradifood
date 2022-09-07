import React from "react";
import PoetryItem from "./items/PoetryItem";

function PoetryList({ poetry, onDelete, onArchive }) {
  return (
    <div className="poetry-list">
      {poetry.map((poe) => (
        <PoetryItem
          key={poe.id}
          id={poe.id}
          onDelete={onDelete}
          onArchive={onArchive}
          isArchived={poe.archived}
          {...poe}
        />
      ))}
    </div>
  );
}

export default PoetryList;
