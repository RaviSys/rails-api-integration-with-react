import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const ErrorRow = (props) => {
  const errorId = props.id;

  const deleteError = () => {
    const deleteConfirmation = window.confirm("Are you Sure?");
    if (deleteConfirmation === true){
      axios.delete(`http://localhost:3001/api/v1/react_errors/${errorId}`)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => console.log(error.message));
    }
  }
  return(
      <React.Fragment>
        <tr>
          <td>{props.name}</td>
          <td>{props.error_type}</td>
          <td>
            <Link to={`/react-error/${props.id}`} className="btn btn-primary">View</Link>
            <button className="btn btn-danger ms-3" type="button" onClick={deleteError}>Delete</button>
          </td>
        </tr>
      </React.Fragment>
    )
}

export default ErrorRow;
