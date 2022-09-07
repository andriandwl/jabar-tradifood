import React from "react";

function ArchiveButton({ id, onArchive, isArchived }) {
  return (
    <button className="poetry-button_archive" onClick={() => onArchive(id)}>
      {isArchived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
