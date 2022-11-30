import React, { useState } from "react";
import { nanoid } from 'nanoid'

function Form({addNote}) {
  const [text, setText] = useState("");
  const [textareaheight, setTextareaheight] = useState(1); 

  

  const handleText = (e) => {
    setText(e.target.value);
    const height = e.target.scrollHeight; 
    const rows = e.target.rows; 
    const rowHeight = 15; 
    const trows = Math.ceil(height / rowHeight) - 1; 
    if (trows,textareaheight ) { 
      setTextareaheight(trows); 
    }
      
      console.log((trows - rows) + ' more rows'); 
      
    } 
   
  

  const handleSubmit = (e) => {
    console.log("worked");
    e.preventDefault();
    const newNote = {
      text: text,
      date: new Date(),
      id:nanoid()
    }
    if (text.length>0)
   addNote(newNote)
   setText("")
  };

  return (
    <div className = "noteForm">
      <h2>Notes</h2>
      <textarea
        value={text}
        onChange={handleText}
        name={"textarea"}
        placeholder="Type note..." >

      </textarea>
      <div className="buttonBox">
      <button className="formButton" onClick={handleSubmit} type="submit">Add</button>
      </div>
    </div>
  );
  }


export default Form;
