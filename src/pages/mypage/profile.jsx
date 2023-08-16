import Input from "@/components/account/Input";
import RadioButton from "@/components/form/RadioButton";
import RadioGroup from "@/components/form/RadioGroup";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const profile = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [pickedGender, setPickedGender] = useState(null);
  const [isMento, setIsMento] = useState(null);

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <article>
        <section>프로필 세팅</section>
        <section className="photo">
          <div>
            <Image
              src={`/profile/${pickedGender ?? "female"}.svg`}
              width={250}
              height={250}
            />
          </div>
          <div className={`button`}>사진 업로드</div>
        </section>
        <section className="form">
          <form onSubmit={handleSubmit(submit)}>
            <div>
              <Input
                formId={"name"}
                placeholder={""}
                errorMsg={null}
                register={register}
                label={"이름"}
                height={"2.25rem"}
              />
              <Input
                formId={"phoneNumber"}
                placeholder={""}
                errorMsg={null}
                register={register}
                label={"휴대폰 전화번호"}
                height={"2.25rem"}
              />
              <Input
                formId={"email"}
                placeholder={""}
                errorMsg={null}
                register={register}
                label={"이메일"}
                height={"2.25rem"}
              />

              <RadioGroup
                groupLabel={"성별"}
                radioList={[
                  { value: "male", text: "남성" },
                  { value: "female", text: "여성" },
                ]}
                formId={"gender"}
                register={register}
                pickedGender={pickedGender}
                setPickedGender={setPickedGender}
              />
              <RadioGroup
                groupLabel={"멘토/멘티를 선택하세요!"}
                radioList={[
                  { value: "mento", text: "멘토" },
                  { value: "menti", text: "멘티" },
                ]}
                formId={"isMento"}
                register={register}
                pickedGender={isMento}
                setPickedGender={setIsMento}
              />
            </div>
            <div className={`button`}>
              <div>시작하기</div>
              <input type="submit" value="➔"></input>
            </div>
          </form>
        </section>
      </article>
      <style jsx>{`
        article {
          min-height: 100vh;
          padding: 2rem;
          > section {
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          > section:first-child {
            font-size: 1.5rem;
            font-weight: bold;
            justify-content: flex-start;
            padding: 1rem 0;
          }

          > section.photo {
            align-items: center;
            gap: 2rem;
            > div.button {
              display: flex;
              justify-content: center;
              align-items: center;
              width: fit-content;
              min-width: 5.6875rem;
              height: 2rem;
              border-radius: 0.5rem;
              border: none;
              background-color: #979797;
              color: white;
              font-size: 0.875rem;
              cursor: pointer;
            }
          }

          > section.form {
            > form {
              > div {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              }
              > div.button {
                width: fit-content;
                margin-left: auto;
                justify-content: end;
                align-items: center;

                > div {
                  color: #635c5c;
                }

                > input {
                  border: none;
                  background-color: ${isValid ? "#089885" : "#C2ECE7"};
                  border-radius: 50%;
                  width: 2.75rem;
                  height: 2.75rem;
                  font-size: larger;
                  color: ${isValid ? "black" : "#887E7E"};
                  cursor: pointer;
                }
              }
            }
          }
        }
      `}</style>
    </>
  );
};

export default profile;
