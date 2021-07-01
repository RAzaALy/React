import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const { value, name } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    // console.log(Note);
  };
  const saveNote = () => {
    if (!note.title) {
      alert("please take a note!");
    } else {
      props.passNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };
  const expanded = () => {
    setExpand(true);
  };
  const shrink = () => {
    setExpand(false);
  };
  return (
    <div className="mainNote" onDoubleClick={shrink}>
      <form>
        {expand ? (
          <input
            type="text"
            autoComplete="off"
            placeholder="Title"
            onChange={inputEvent}
            value={note.title}
            name="title"
          />
        ) : null}

        <textarea
          name="content"
          id="text"
          value={note.content}
          cols="30"
          rows="10"
          placeholder="Take a note..."
          onChange={inputEvent}
          onClick={expanded}
        ></textarea>

        {expand ? (
          <Button className="Btn">
            <Tooltip title="Save">
              <AddIcon className="plus" onClick={saveNote} />
            </Tooltip>
          </Button>
        ) : null}
      </form>
    </div>
  );
};
export default CreateNote;
