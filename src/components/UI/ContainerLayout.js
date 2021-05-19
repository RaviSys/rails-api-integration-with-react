import React from "react";

const ContainerLayout = (props) => {
  return(
    <React.Fragment>
      <div className="container">
        <div className="row">
          { props.children }
        </div>
      </div>
    </React.Fragment>
  )
}

export default ContainerLayout;
