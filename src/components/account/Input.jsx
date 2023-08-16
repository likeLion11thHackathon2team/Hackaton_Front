import React from "react";

const Input = ({
  formId,
  placeholder,
  errorMsg,
  register,
  label = null,
  height = null,
}) => {
  return (
    <>
      <div className="input">
        {label && <div className={"label"}>{label}</div>}
        <input
          placeholder={placeholder}
          {...register(`${formId}`, { required: true })}
        />
        {errorMsg && <div className={"error"}>{errorMsg}</div>}
      </div>
      <style jsx>{`
        div.input {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          > input {
            width: 100%;
            height: ${height ? height : "3.75rem"};
            border-radius: 5px;
            border: 1px solid ${errorMsg ? "#DA7676" : "#887E7E"};
            padding: 1.1875rem;
          }

          > div.label {
            font-size: 1rem;
            margin-bottom: 0.5rem;
            color: #635c5c;
          }

          > div.error {
            color: #da7676;
            font-size: 0.75rem;
            padding: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Input;
