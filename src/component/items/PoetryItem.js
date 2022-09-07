import React from "react";
import ArchiveButton from "../buttons/ArchiveButton";
import DeleteButton from "../buttons/DeleteButton";
import PoetryBody from "./PoetryBody";

function PoetryItem({
  id,
  onDelete,
  createdAt,
  onArchive,
  isArchived,
  body,
  title,
}) {
  return (
    <div className="poetry-item">
      <PoetryBody body={body} title={title} createdAt={createdAt} />
      <DeleteButton id={id} onDelete={onDelete} />
      <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived} />
    </div>
  );
}

export default PoetryItem;
