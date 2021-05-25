import React from "react";

const ErrorList = (props) => {
  return(
    <React.Fragment>
      <ul className="lead font-weight-400">
        {props.errorMessages.map((errorMessage) => (
          <li>{errorMessage}</li>
        ))}
      </ul>
    </React.Fragment>
  )
}

export default ErrorList;
