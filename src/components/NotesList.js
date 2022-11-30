import React from "react";
import Note from "./Note.js"


function notesList({notes,deleteNote}){
console.log(notes)
return(
    <div className="noteList">
        { notesList && notesList > 0 &&
            notesList.map((note) => ( <Note note = {note} key = {note.id} deleteNote={deleteNote}/>))
        
    }
        
    </div>
)
}
export default notesList;