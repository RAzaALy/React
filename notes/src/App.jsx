import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import CreateNote from "./CreateNote.jsx";
import Note from "./Note.jsx";

//get data from local storage:
const getData = () => {
  const note = localStorage.getItem("note");
  // console.log(toDo);
  if (note) {
    return JSON.parse(localStorage.getItem("note"));
  } else {
    return [];
  }
};

const App = () => {
  const [add, setAdd] = useState(getData());

  const addNote = (note) => {
    const inputObj = {
      id: new Date().getTime().toString(),
      title: note.title,
      content: note.content,
    };
    setAdd((prev) => {
      return [...prev, inputObj];
    });
    // console.log(note);
  };
  const deleteNote = (index) => {
    //  console.log("deleted");
    setAdd((prevItem) => {
      return prevItem.filter((elem) => {
        return index !== elem.id;
      });
    });
  };
  //Delete all notes
  const clearAll = () => {
    setAdd([]);
  };
  //add to local storage:
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(add));
  }, [add]);
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <div className="container">
        {add.map((value) => {
          return (
            <Note
              title={value.title}
              content={value.content}
              key={value.id}
              id={value.id}
              delete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
};
export default App;
