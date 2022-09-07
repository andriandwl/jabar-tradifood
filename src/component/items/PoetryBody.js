import React from "react";
import { showFormattedDate } from "../utils";

function PoetryBody({ title, createdAt, body }) {
  return (
    <div className="poetry-body">
      <h3 className="poetry-body_title">{title}</h3>
      <p className="poetry-body_date">{showFormattedDate(createdAt)}</p>
      <p className="poetry-body_content">{body}</p>
    </div>
  );
}

export default PoetryBody;
