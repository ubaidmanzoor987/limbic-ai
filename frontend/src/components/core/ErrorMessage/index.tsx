import React from "react";

const ErrorMessageText = ({ name }: { name: string | undefined }) => {
  if (name) {
    return <div className="error-message">{name}</div>;
  }
  return <></>;
};

export default ErrorMessageText;
