import Input from "@/components/account/Input";
import React from "react";
import { useForm } from "react-hook-form";
// import styled from "styled-components";

// export const RadioButton = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: fit-content;
//   min-width: 5.6875rem;
//   height: 2rem;
//   border-radius: 0.5rem;
//   border: none;
//   background-color: #000000;
//   color: white;
//   font-size: 0.875rem;
// `;

// /*
//   > input {
//     display: none;
//   } */
const profile = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <article>
        <section>프로필 세팅</section>
        <section>
          <div>사진</div>
          <div>사진 업로드</div>
        </section>
        <section>
          <form onSubmit={handleSubmit(submit)}>
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
            <div>
              <label>성별</label>
              <div>
                {/* <RadioButton>
                  <input type="radio" value={"male"} {...register("gender")} />
                  남성
                </RadioButton>
                <RadioButton>
                  <input
                    type="radio"
                    value={"female"}
                    {...register("gender")}
                  />
                  여성
                </RadioButton> */}
              </div>
            </div>

            <div>
              <input type="submit" value="시작"></input>
            </div>
          </form>
        </section>
      </article>
      <style jsx>{`
        article {
          > section {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default profile;
