import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const Note = ({ note, deleteNote, editNote }) => {
  function handleDeleteNote() {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      deleteNote(note.id);
    }
  }

  const [show, setShow] = useState(false);
  console.log(show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onModalSubmit = (e) => {
    e.stopPropagation();
    handleClose();
  };
  const [modalBody, setModalBody] = useState(note.text);
  const [modalTitle, setModalTitle] = useState(note.title);
  const[modalDate,setModalDate] = useState(note.date);
  const createdDate = (note.date);
  
  useEffect(()=>{
    const updateDate = new Date()
    setModalDate(updateDate.toLocaleString())
  },[modalTitle,modalBody])
  const submitEditNote = (e) => {
    e.stopPropagation();
    handleClose(); 
    editNote(note.id,modalTitle, modalBody, createdDate, modalDate);
  };


  return (
    <div className="noteArea" onClick={handleShow}>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="modal"
        onHide={onModalSubmit}
      >
        <div className="modalShape">
        <ModalBody className="modalContent">
          <div className="inputContainer">
            <form className="inputContainerForm">
              <input
                onChange={(e) => {
                  setModalTitle(e.target.value);
                }}
                value={modalTitle}
                type="text"
                className="modalTitle"
                placeholder="your New Title"
              ></input>
            </form>
            <textarea
              required
              onChange={(e) => {
                setModalBody(e.target.value);
              }}
              value={modalBody}
              type="text"
              className="modalText"
              placeholder="Type Note..."
            ></textarea>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button variant="secondary" onClick={onModalSubmit} className="close">
            Close
          </Button>
          <Button variant="primary" onClick={submitEditNote}>
            Edit
          </Button>
        </ModalFooter>
        </div>
      </Modal>

      <div className="noteInfo">
        <div className="noteData">{note.title}</div>
        <div className="noteData req">{note.text}</div>
        <h3 className="noteData">Created Date: {note.date}</h3>
       <h3 className="updatedDate">Updated Date:{modalDate}</h3>
         <button className="deleteButton" onClick={handleDeleteNote}>
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default Note;
