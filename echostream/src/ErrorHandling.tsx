import React from "react";

interface ErrorHandlingProps {
  error: string;
}

const ErrorHandling: React.FC<ErrorHandlingProps> = ({ error }) => {
  return (
    <div className="error">
      <p>{error}</p>
    </div>
  );
};

export default ErrorHandling;
