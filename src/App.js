import { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import NotesList from "./components/NotesList.js"


function App() {

  const [notes, setNotes] = useState([])
  const addNote = (newNote) => {
   const newArray = [...notes, newNote]
    setNotes(newArray)
  };


const deleteNote = (noteId) =>{ 
  const deletedNote =  notes.filter(note => note.id !== noteId)
  setNotes(deletedNote)
}
//const editNote = (noteId) =>{}


  return (
    <div>
  <Form  addNote= {addNote} />
  <NotesList notes = {notes} deleteNote = {deleteNote}/>

  </div>
  )
  
}


export default App;
