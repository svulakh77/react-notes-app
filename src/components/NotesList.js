import React from "react";
import Note from "./Note.js"


function notesList({notes,addNote, deleteNote}){
console.log(notes)
return(
    <div className="noteList">
        { notesList && notesList > 0 &&
            notesList.map((notes) => ( <Note 
                notes = {notes} 
                key = {notes.id} 
                addNote = {addNote}
                deleteNote={deleteNote}/>))
        
    }
        
    </div>
)
}
export default notesList;