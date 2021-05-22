import React from "react";
import {Link} from "react-router-dom";

import axios from "axios";

const UserRow = (props) => {

  const userId = props.id;

  const deleteUser = () => {
    const deleteConfirmation = window.confirm('Are you sure?');
    if (deleteConfirmation === true) {
      axios.delete(`http://localhost:3001/api/v1/users/${userId}`)
      .then(response => {
        console.log(response.data);
        window.location.reload();
      })
      .catch(error => console.log(error.message))
    }
  }

  return(
    <React.Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.contact_no}</td>
        <td>
          <Link to={`/users/${props.id}`} className="btn btn-primary">View</Link>
          <button className="btn btn-danger ms-3" type="button" onClick={deleteUser}>Delete</button>
        </td>
      </tr>
    </React.Fragment>
  )
};

export default UserRow;
