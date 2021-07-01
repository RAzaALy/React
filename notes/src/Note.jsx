import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/DeleteTwoTone";
import Edit from "@material-ui/icons/EditOutlined";
import Tooltip from "@material-ui/core/Tooltip";

const Note = (props) => {
  const [edit, setEdit] = useState(true);
  return (
    <>
      <div className="note">
        <div className="tools">
          <Tooltip title="edit">
            <Edit
              style={{ fontSize: 30 }}
              className="edit button btn"
              onClick={() => {
               setEdit(false);
              }}
            />
          </Tooltip>
          <Tooltip title="Delete">
            <DeleteIcon
              style={{ fontSize: 30 }}
              className="delete button btn"
              onClick={() => {
                props.delete(props.id);
              }}
            />
          </Tooltip>
        </div>
        {edit ? (
          <div class="main">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
          </div>
        ) : (
          <textarea class="textarea" name="textarea" id="textarea">
          {props.content}
          </textarea>
        )}
      </div>
    </>
  );
};
export default Note;
