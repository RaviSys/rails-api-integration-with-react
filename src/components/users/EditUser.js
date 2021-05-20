import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const EditUser = (props) => {

  const hideModal = () => {
    props.onHideModal(false);
  };

  return(
    <Modal show={props.isEditable} onHide={hideModal}>
      <form>
        <ModalHeader>
          <ModalTitle>Editing User</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input type="text" className="form-control form-control-lg" defaultValue={`${props.user.name}`} />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" className="form-control form-control-lg" defaultValue={`${props.user.email}`} />
          </div>
          <div className="form-group">
            <label className="form-label">Contact No:</label>
            <input type="text" className="form-control form-control-lg" defaultValue={`${props.user.contact}`} />
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

export default EditUser;
