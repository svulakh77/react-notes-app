import React, { useState }  from "react";
import { nanoid } from 'nanoid'
import TextareaAutosize from 'react-textarea-autosize';

function Form({addNote}) {
  //const textRef = useRef("");
  const [text, setText] = useState("");
  const[title,setTitle] = useState("");
  //const [value, setValue] = useState(0);
  const handleText = (e) => {
    //setValue(e.target.value);
    setText(e.target.value);
  };


  
  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
  /*const handleText = (e) => {
    setText(e.target.value);
   
    }*/
      
    
    
   
  
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
      <TextareaAutosize
        value={text}
        onChange={handleText}
        className="textarea"
        placeholder="Type note..." 
        required

      />
      <div className="buttonBox">
      <button className="formButton" onClick={handleSubmit} type="submit">Add</button>
      </div>
    </div>
  );
  }


export default Form;
