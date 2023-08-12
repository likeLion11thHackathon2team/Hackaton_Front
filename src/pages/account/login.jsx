import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/account/Input";

const login = () => {
  const {
    register,
    handleSubmit,
    // onSubmit,
    formState: { isSubmitting, isSubmitted, errors },
  } = useForm();
  const [loginError, setLoginError] = useState(null);

  const login = async (data) => {
    const response = await axios
      .post("/api/login", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    console.log(response);
    if (response.status === "200") {
    } else {
      setLoginError({
        id: "아이디를 입력",
        password: "비밀번호를 올바르게 입력해주세요",
      });
    }
  };

  return (
    <>
      <article>
        <section></section>
        <section>
          <div>
            <div>로그인 하기</div>
            <div>회원가입 하기</div>
          </div>
          <div>
            <form onSubmit={handleSubmit(login)}>
              <Input
                formId={"id"}
                placeholder={"아이디"}
                errorMsg={loginError?.id ?? null}
                register={register}
              ></Input>
              <Input
                formId={"password"}
                placeholder={"비밀번호"}
                errorMsg={loginError?.password ?? null}
                register={register}
              ></Input>
              {/* {errors.exampleRequired && <span>This field is required</span>} */}
              {/* <input type="submit">로그인</input> */}
              <button type="submit">로그인</button>
              {/* onClick={() => onSubmit()} */}
            </form>
          </div>
        </section>
        <section></section>
      </article>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 0.6875rem;
        }
      `}</style>
    </>
  );
};

export default login;
