import React from "react";

const UserDetail = (props) => {
  return(
    <React.Fragment>
      <div className="col-lg-4 col-md-6">
        <div className="card shadow mt-5">
          <div className="card-body">
            <h1>{props.name}</h1>
            <h3>{props.email}</h3>
            <h3>{props.contact_no}</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default UserDetail;
