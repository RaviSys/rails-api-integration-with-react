import React from "react";

const FlashMessage = (props) => {
  return(
    <React.Fragment>
      <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
        <strong>Great!</strong> {props.message}.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </React.Fragment>
  )
};

export default FlashMessage;
