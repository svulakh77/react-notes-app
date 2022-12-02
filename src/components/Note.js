import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import { nanoid } from "nanoid";

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
  return (
    <div className="noteArea" onClick={handleShow}>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        className="modal"
        onHide={onModalSubmit}
      >
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
                placeholder="yourNewTitle"
              ></input>
            </form>
            <textarea
              required
              onChange={(e) => {
                setModalBody(e.target.value);
            }}
                value = { modalBody }
                type="text"
                className = "modalText"
                placeholder = "Type Note..."
              
            ></textarea>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={onModalSubmit} className="close">
            Close
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              editNote(note.id, note.title, note.text);
            }}
          >
            Edit
          </Button>
        </ModalFooter>
      </Modal>

      <div className="noteInfo">
        <div className="noteData">{note.title}</div>
        <div className="noteData req">{note.text}</div>
        <h3 className="noteData">{note.date.toString()}</h3>
        <button className="deleteButton" onClick={handleDeleteNote}>
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default Note;
