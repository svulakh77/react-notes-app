import React, { useState } from "react";
import { nanoid } from 'nanoid'

function Form({addNote}) {
  const [text, setText] = useState("");
  const[title,setTitle] = useState("");
  const [textareaheight, setTextareaheight] = useState(1); 

  
  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
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
   
  
    const noteDate = new Date()
  
    const handleSubmit = (e) => {
    console.log("worked");
    e.preventDefault();
  
    const newNote = {
      title: title,
      text: text,
      date: noteDate.toLocaleString(),
      id:nanoid()}
   
  if (text.length>0){
  addNote(newNote)
   setText("")
   setTitle("")
   console.log(newNote)
  }
    }
  return (
    <div className = "noteForm">
      <h2>Notes</h2>
      <input 
      value={title}
      onChange={handleTitle}
      className="noteTitle"
      placeholder="Your Title"
      ></input>
      <input
        value={text}
        onChange={handleText}
        className="textarea"
        placeholder="Type note..." 
        required>

      </input>
      <div className="buttonBox">
      <button className="formButton" onClick={handleSubmit} type="submit">Add</button>
      </div>
    </div>
  );
}


export default Form;
