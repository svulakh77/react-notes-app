import React, { useState } from "react";
import { nanoid } from 'nanoid'

function Form({addNote}) {
  const [text, setText] = useState("");


  const handleText = (e) => {
    setText(e.target.value);
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    console.log("worked");
    e.preventDefault();
    const newNote = {
      text: text,
      date: new Date(),
      id:nanoid()
    }
   addNote(newNote)
   setText("")
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleText}
        name={"textarea"}
        placeholder="note"
      ></textarea>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}

export default Form;
