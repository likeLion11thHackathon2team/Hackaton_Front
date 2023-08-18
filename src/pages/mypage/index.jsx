import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const _userInfo = {
      id: localStorage.getItem("userId"),
      name: localStorage.getItem("userName"),
      photo: localStorage.getItem("userPhoto"),
    };
    setUserInfo(_userInfo);
  }, []);

  if (userInfo) {
    return (
      <>
        <article>
          <section className={`header`}>나의 페이지</section>
          <section className={`info`}>
            <div>
              <Image
                src={userInfo?.photo ? userInfo?.photo : `/profile/female.svg`}
                width={100}
                height={100}
              />
            </div>
            <div>
              <div>{userInfo.name}(멘티)</div>
              <div>인증완료</div>
            </div>
          </section>
          <section className={`list`}>
            <div>
              <div>
                <Image
                  src={`/mypage/profile-setting.svg`}
                  width={25}
                  height={25}
                ></Image>
              </div>
              <div>프로필 수정</div>
            </div>
            <div>
              <div>
                <Image
                  src={`/mypage/setting.svg`}
                  width={25}
                  height={25}
                ></Image>
              </div>
              <div>설정</div>
            </div>
          </section>
        </article>
        <style jsx>{`
          article {
            display: flex;
            flex-direction: column;
            width: 100%;

            > section.header {
              font-size: 1.5rem;
              font-weight: 500;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 1rem 0;
            }

            > section.info {
              display: flex;
              justify-content: start;
              align-items: center;
              padding: 2.5rem 1.25rem;
              gap: 1.3125rem;
              border-bottom: 1px solid #d1d1d6;
              border-top: 1px solid #d1d1d6;

              > div:first-child {
                border-radius: 50%;
                width: 6.25rem;
                height: 6.25rem;
              }

              > div:nth-child(2) {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;
                > div:first-child {
                  font-size: 1.3125rem;
                  font-weight: 400;
                }
                > div:nth-child(2) {
                  background-color: #cacaca;
                  color: white;
                  font-size: 0.625rem;
                  border-radius: 1rem;
                  padding: 0.1875rem 0.8125rem;
                }
              }
            }

            > section.list {
              display: flex;
              flex-direction: column;
              > div {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: start;
                gap: 0.5rem;
                padding: 1rem 2rem;
                cursor: pointer;
              }
            }
          }
        `}</style>
      </>
    );
  } else {
    return <></>;
  }
};

export default MyPage;
