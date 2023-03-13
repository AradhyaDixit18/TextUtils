import React from "react";

function Alert(props) {
   const height = {
       height : "55px"
    }
  return (
   props.alert && <div className="alert alert-success alert-dismissible fade show" style={height}    role="alert">
      <strong>{props.alert.type}</strong> : {props.alert.msg}
    </div>
  );
}

export default Alert;
