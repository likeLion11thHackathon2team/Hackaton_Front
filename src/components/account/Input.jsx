import React from "react";

const Input = ({ formId, placeholder, errorMsg, register }) => {
  return (
    <>
      <div className="input">
        <input
          placeholder={placeholder}
          {...register(`${formId}`, { required: true })}
        />
        {errorMsg && <div>{errorMsg}</div>}
      </div>
      <style jsx>{`
        div.input {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          > input {
            width: 100%;
            height: 3.75rem;
            border-radius: 5px;
            border: 1px solid ${errorMsg ? "#DA7676" : "#887E7E"};
            padding: 1.1875rem;
          }

          > div {
            color: #da7676;
            font-size: 0.75rem;
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Input;
