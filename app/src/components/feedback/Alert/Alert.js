import React from "react";

import "./Alert.css";

export const AlertTypes = {
  REMOVE: "remove",
};

const Alert = ({ timeout, closeAlert, alert }) => {
  if (timeout) {
    setTimeout(() => closeAlert(), timeout);
  }

  return (
    <div className="alert_container">
      <p>{alert.message}</p>
    </div>
  );
};

export default Alert;
