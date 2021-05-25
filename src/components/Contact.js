import React, { useState, useRef } from 'react';
import axios from "axios";

import FlashMessage from "./users/FlashMessage";

const Contact = () => {

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const successMessage = "Contact info has been saved successfully.";

  const email = useRef();
  const name = useRef();
  const phone = useRef();
  const message = useRef();

  const saveContactData = (event) => {
    event.preventDefault();
    const contactUsData = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value
    }
    createContact(contactUsData)
    email.current.value = "";
    name.current.value = "";
    phone.current.value = "";
    message.current.value = "";
    setIsAlertVisible(true)
  }

  const createContact = (contactUsData) => {
    axios.post(`http://localhost:3001/api/v1/contacts`, { contact: contactUsData })
    .then(response => {
      // window.location.reload();
      console.log(response.data);
    })
    .catch(error => console.log(error.message))
  }

  return(
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-8 col-md-12 col-12 mx-lg-auto">
            {isAlertVisible ? <FlashMessage message={successMessage}/> : ''}
            <div className="card">
              <div className="card-body">
                <form onSubmit={saveContactData}>
                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Name: </label>
                      <input type="text" className="form-control form-control-lg" ref={name} />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Email: </label>
                      <input type="email" className="form-control form-control-lg" ref={email} />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Contact: </label>
                      <input type="text" className="form-control form-control-lg" ref={phone} />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label>Message: </label>
                      <textarea className="form-control form-control-lg" rows="8" ref={message}></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12 mb-4">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) 
}

export default Contact;
