import React, { useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import ErrorRow from './ErrorRow';
import CreateError from './CreateError';

const ErrorList = () => {
  const [errors, setErrors] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getErrors = useCallback(() => {
    axios.get('http://localhost:3001/api/v1/react_errors')
    .then(response => {
      setErrors(response.data)
    })
    .catch(error => console.log(error))
  },[]);

  const componentDidMount = useCallback(() => {
    getErrors();
  },[])

  useEffect(() => {
    componentDidMount();
  }, [componentDidMount]);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const setModalVisibility = (bool) => {
    setIsModalOpen(bool);
  }

  return(
    <React.Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-12">
            <button className="btn btn-primary btn-lg mb-3" type="button" onClick={showModal}>Add New Error</button>
            <CreateError isEditable={isModalOpen} onHideModal={setModalVisibility} />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Error Types</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {errors.map((error) => (
                  <ErrorRow 
                    key={error.id} 
                    name={error.title}
                    error_type={error.error_type}
                    id={error.id}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
    )

}

export default ErrorList;
