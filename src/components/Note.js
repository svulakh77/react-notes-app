import React from "react";

const Note = ({ notes, deleteNote }) => {
    const handleDeleteNote = () =>{
        deleteNote(notes.id)
    }
    return(
        <div className="noteInfo">
            <textarea><span className="noteData">{notes.text}</span></textarea>
            <h3><span className="noteData">{notes.date}</span></h3>
            <button onClick = {handleDeleteNote}>Delete Note</button>
        </div>
    )
    }
export default Note;