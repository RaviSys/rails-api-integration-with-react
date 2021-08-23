import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import axios from "axios";

const CreateError = (props) => {
  const [errorTitle, setErrorTitle] = useState('')
  const [errorType, setErrorType] = useState('')

  const hideModal = () => {
    props.onHideModal(false);
  }

  const titleChangeHandler = (event) => {
    setErrorTitle(event.target.value);
  }

  const typeChangeHandler = (event) => {
    setErrorType(event.target.value);
  }

  const createErrorData = (event) => {
    event.preventDefault();
    const errorData = {
      title: errorTitle,
      error_type: errorType
    }
    createErrorData(errorData)
  }

  const createError = (errorData) => {
    axios.post(`http://localhost:3001/api/v1/react_errors`, {error: errorData})
    .then(response => {
      window.location.reload();
      console.log(response.data);
    })
    .catch(error => console.log(error.message))
  }

  return(
    <Modal show={props.isEditable} onHide={hideModal}>
      <form onSubmit={createErrorData}>
        <ModalHeader>
          <ModalTitle>Create New Error</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input type="text" className="form-control form-control-lg" value={errorTitle} onChange={titleChangeHandler} required="true" />
          </div>
          <div className="form-group">
            <label className="form-label">Type</label>
            <input type="text" className="form-control form-control-lg" value={errorType} onChange={typeChangeHandler} required="true" />
          </div>
        </ModalBody> 
        <ModalFooter>
          <button onClick={hideModal} className="btn btn-outline-danger" type="button">Cancel</button>
          <button className="btn btn-success" type="submit">Save</button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default CreateError;
