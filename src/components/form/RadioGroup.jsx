import React from "react";
import RadioButton from "./RadioButton";
const radioList = [
  { value: "male", text: "남성" },
  { value: "female", text: "여성" },
];
const RadioGroup = ({
  groupLabel,
  radioList,
  formId,
  register,
  pickedGender,
  setPickedGender,
}) => {
  return (
    <>
      <div className={"group"}>
        <label>{groupLabel}</label>
        <div>
          {radioList.map((radio) => {
            return (
              <RadioButton
                formId={formId}
                register={register}
                text={radio.text}
                radioValue={radio.value}
                pickedValue={pickedGender}
                setPickedValue={setPickedGender}
              />
            );
          })}
        </div>
      </div>
      <style jsx>{`
        div.group {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          color: #635c5c;

          > div {
            display: flex;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default RadioGroup;
