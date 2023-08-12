import React from "react";

const colorAsset = {
  mint: {
    backColor: "#089885",
    disabledColor: "#C2ECE7",
    textColor: "white",
  },
};

const SquareButton = ({
  color,
  isDisabled,
  width,
  height,
  text,
  buttonType,
}) => {
  return (
    <>
      <button type={buttonType ?? null}>{text}</button>
      <style jsx>{`
        button {
          width: ${width ?? "100%"};
          height: ${height ?? "3.75rem"};
          padding: 0.9375rem;
          border-radius: 5px;
          border: none;
          cursor: ${isDisabled ? "not-allowed" : "pointer"};
          background-color: ${isDisabled
            ? colorAsset[`${color}`].disabledColor
            : colorAsset[`${color}`].backColor};
          color: ${colorAsset[`${color}`].textColor};
          font-size: 1.5rem;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default SquareButton;
