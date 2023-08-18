import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/account/Input";
import SquareButton from "@/components/button/SquareButton";
import Image from "next/image";
import { useRouter } from "next/router";

const AccountPage = ({ pageType, error, submitEvent }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

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
            <div>{pageType === "login" ? "로그인" : "회원가입"} 하기</div>
            <div
              onClick={() =>
                router.push(
                  `/account/${pageType === "login" ? "signup" : "login"}`
                )
              }
            >
              {pageType === "login" ? "회원가입" : "로그인"} 하기
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit(submitEvent)}>
              <div>
                <Input
                  formId={"id"}
                  placeholder={"아이디"}
                  errorMsg={error?.id ?? null}
                  register={register}
                ></Input>
                <Input
                  formId={"password"}
                  placeholder={"비밀번호"}
                  errorMsg={error?.password ?? null}
                  register={register}
                  type={"password"}
                ></Input>
                {pageType === "signup" && (
                  <Input
                    formId={"password2"}
                    placeholder={"비밀번호 확인"}
                    errorMsg={error?.password2 ?? null}
                    register={register}
                    type={"password"}
                  ></Input>
                )}
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

export default AccountPage;
