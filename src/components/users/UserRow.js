import React from "react";
import {Link} from "react-router-dom";
 
const UserRow = (props) => {
  return(
    <React.Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.email}</td>
        <td>{props.contact_no}</td>
        <td>
          <Link to={`/users/${props.id}`} className="btn btn-primary">View</Link>
        </td>
      </tr>
    </React.Fragment>
  )
};

export default UserRow;
