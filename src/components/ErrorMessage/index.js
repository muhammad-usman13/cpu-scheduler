import React from "react";

const ErrorMessage = () => {
  return (
    <div
      className="inline-flex px-2 py-1 text-xs text-red-700 bg-red-100 rounded-lg"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div className="font-medium">Error!</div>
    </div>
  );
};

export default ErrorMessage;
