import React, { useState } from "react";
import Tooltip from "../../node_modules/@material-ui/core/Tooltip/Tooltip";
import Button from "../../node_modules/@material-ui/core/Button/Button";
import Logo from "../../node_modules/@material-ui/icons/NoteAddRounded";
import Edit from "../../node_modules/@material-ui/icons/EditOutlined";
import AddCircle from "../../node_modules/@material-ui/icons/AddCircleOutline";
import { addTodo, clearAll } from "../actions/Index";
import { useDispatch } from "react-redux";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="center">
        <h1>Sticky Notes</h1>
        <Logo className="logo"></Logo>
        <input
          type="text"
          placeholder="Add a Note"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <Tooltip title="Save toDo">
          <AddCircle
            className="Btn"
            style={{ fontSize: 40 }}
            onClick={() => {
              if (todo) {
                dispatch(addTodo(todo));
              } else {
                alert("please write your Todo data.");
              }
              setTodo("");
            }}
          ></AddCircle>
        </Tooltip>
        <Button className="clear" onClick={() => dispatch(clearAll())}>Clear All</Button>
        {/* <Tooltip title="Update toDo">
          <Edit className="Btn"  style={{ fontSize: 40 }} ></Edit>
        </Tooltip> */}
      </div>
    </>
  );
};

export default Todo;
