import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/account/Input";
import SquareButton from "@/components/button/SquareButton";
import Image from "next/image";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // onSubmit,
    formState: { isValid, isSubmitting, isSubmitted, errors },
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
        <section>
          <Image
            src={`/login/account-pic.svg`}
            width={250}
            height={200}
          ></Image>
        </section>
        <section>
          <div>
            <div>로그인 하기</div>
            <div onClick={() => router.push("/account/signup")}>
              회원가입 하기
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(login)}>
              <div>
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
              </div>
              <SquareButton
                color={"mint"}
                isDisabled={isValid ? false : true}
                width={null}
                height={null}
                text={"로그인"}
                buttonType={"submit"}
              />
            </form>
          </div>
        </section>
        <section></section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          min-height: 100vh;
          padding: 2rem;
          > section {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            > div {
              width: 100%;
            }
          }
          > section:first-child {
            margin-bottom: 1.375rem;
          }
          > section:nth-child(2) {
            width: 20.625rem;
            > div:first-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 1.3125rem;
              > div:first-child {
                font-size: 1.5rem;
                font-weight: 500;
              }
              > div:nth-child(2) {
                font-size: 0.75rem;
                font-weight: 400;
                color: #089885;
                text-decoration: underline;
                cursor: pointer;
              }
            }
          }
        }

        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 3.75rem;
          > div {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0.6875rem;
          }
        }
      `}</style>
    </>
  );
};

export default login;
