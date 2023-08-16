import React, { useState } from "react";

const RadioButton = ({
  formId,
  register,
  text,
  radioValue,
  pickedValue,
  setPickedValue,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div>
        <input
          type="radio"
          value={radioValue}
          {...register(`${formId}`, { required: true })}
          onChange={(e) => {
            setPickedValue(radioValue);
          }}
          id={radioValue}
          checked={pickedValue === radioValue}
        />
        <label htmlFor={radioValue}>{text}</label>
      </div>
      <style jsx>{`
        label {
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          min-width: 5.6875rem;
          height: 2rem;
          border-radius: 0.5rem;
          border: none;
          background-color: ${pickedValue === radioValue
            ? "#000000"
            : "#979797"};
          color: white;
          font-size: 0.875rem;
          cursor: pointer;
        }
        input[type="radio"] {
          display: none;
        }
      `}</style>
    </>
  );
};
export default RadioButton;
