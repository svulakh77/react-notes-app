import React from "react";

const Note = ({note,deleteNote}) => {
    const handleDeleteNote = () =>{
        deleteNote(note.id)
    }
    return(
        <div className="noteInfo">
            <textarea><span className="noteData">{note.text}</span></textarea>
            <h3><span className="noteData">{note.date}</span></h3>
            <button onClick = {handleDeleteNote}>Delete Note</button>
        </div>
    )
    }
export default Note;