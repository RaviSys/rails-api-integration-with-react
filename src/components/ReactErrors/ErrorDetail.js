import React, { useState, useEffect, useCallback } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import ContainerLayout from '../UI/ContainerLayout';
import FlashMessage from "./FlashMessage";

const ErrorDetail = (props) => {
  const errorId = props.match.params.id
  const successMessage = 'React Error has been updated successfully.';

  const [error, setError] = useState({})
  const [editable, setEditable] = useState(false)
  const [isAlertVisible, setIsAlertVisible] = useState(false)

  const getError = useCallback(() => {
    axios.get(`http://localhost:3001/api/v1/react_errors/${errorId}`)
    .then(response => {
      setError(response.data);
    })
    .catch(error => console.log(error))
  },[])

  const componentDidMount = useCallback(() => {
    getError();
  },[])

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  const showModal = () => {
    setEditable(true);
  }

  const setModalVisibility = (bool) => {
    setEditable(bool);
  }

  const setUpdatedError = (errorData) => {
    setError(errorData);
  }

  const displayFlashMessage = (bool) => {
    setIsAlertVisible(bool);
  }
  return(
      <ContainerLayout>
        <div className="col-lg-9 mx-lg-auto">
          {isAlertVisible ? <FlashMessage message={successMessage}/> : ''}
          <div className="card shadow mt-5">
            <div className="row g-0">
              <div className="col-lg-4">
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h1>{error.name}</h1>
                  <p className="lead font-weight-400">Email: <span className="email-text text-primary">{error.error_type}</span></p>
                  <p className="lead font-weight-400">Error Created On: <span className="text-primary">{error.created_at}</span></p>
                  <Link to="/react-errors" className="btn btn-primary">Back to Errors List</Link>
                  <button className="btn btn-success ms-3" type="button" onClick={showModal}>Edit Error</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    )
}

export default ErrorDetail;
