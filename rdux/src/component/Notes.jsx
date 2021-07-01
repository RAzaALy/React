import React from "react";
import Delete from "../../node_modules/@material-ui/icons/DeleteForeverSharp";
import Tooltip from "../../node_modules/@material-ui/core/Tooltip/Tooltip";
import Edit from "../../node_modules/@material-ui/icons/EditOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/Index";
const Notes = () => {
  const list = useSelector((state) => state.TodoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
    <div className="notes">
      {list.map((elem) => {
        return (
          <div className="noteStyle" key={elem.id}>
            <Tooltip title="edit">
              <Edit className="edit" style={{ fontSize: 20 }}></Edit>
            </Tooltip>
            <Tooltip title="delete">
              <Delete
                className="trash"
                style={{ fontSize: 20 }}
                onClick={() => dispatch(deleteTodo(elem.id))}
              ></Delete>
            </Tooltip>

            <h2>{elem.data}</h2>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Notes;
