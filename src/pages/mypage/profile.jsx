import Input from "@/components/account/Input";
import RadioGroup from "@/components/form/RadioGroup";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const profile = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const [pickedGender, setPickedGender] = useState(null);
  const [isMento, setIsMento] = useState(null);

  const [userProfile, setUserProfile] = useState(null);
  const [userProfileBinary, setUserProfileBinary] = useState(null);

  const convertPhoneNumber = (target) => {
    const phoneNumber = target
      .replace(/[^0-9]/g, "")
      .replace(
        /(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g,
        "$1-$2-$3"
      );
    return phoneNumber;
  };

  const submit = useCallback(
    async (data) => {
      const response = await axios
        .patch(
          `${process.env.NEXT_PUBLIC_API}mypage/profile`,
          {
            photo: FormData,
            name: data.name,
            phoneNumber: convertPhoneNumber(data.phoneNumber),
            email: data.email,
            gender: pickedGender,
            isMento: isMento === "mento" ? true : false,
          },
          {
            headers: { "content-type": "multipart/form-data" },
            transformRequest: (data, headers) => {
              return data;
            },
          }
        )
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });

      if (response.status === "200") {
        router.push(`/mypage`);
      }
    },
    [pickedGender, isMento]
  );

  return (
    <>
      <article>
        <section>프로필 세팅</section>
        <section className="photo">
          <div className={`photo-circle`}>
            {userProfile ? (
              ""
            ) : (
              <Image
                src={`/profile/${pickedGender ?? "female"}.svg`}
                width={250}
                height={250}
                // alt="profile"
              />
            )}
          </div>

          <div className={`button`}>
            <input
              type="file"
              accept=".jpg, .png"
              className="register-photo"
              onChange={(e) => {
                const file = e.target.files[0];
                const formData = new FormData();
                formData.append("profile", file);
                setUserProfile(file);
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onload = function (e) {
                  setUserProfileBinary(e.target.result);
                };
              }}
            ></input>
            사진 업로드
          </div>
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
                type={"number"}
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

            > div.photo-circle {
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              background: url(${userProfileBinary});
              width: 17rem;
              height: 17rem;
            }
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
              position: relative;

              > input {
                opacity: 0;
                position: absolute;
                width: 100%;
                cursor: pointer;
              }
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
