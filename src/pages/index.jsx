import React from "react";

const index = () => {
  return (
    <>
      <div className={`page`}>
        <img className="first-img" src="/login/start.png" />
        <div className={"buttons"}>
          <button
            onClick={() => {
              window.location.href = "/account/login";
            }}
            className="btn-login"
          >
            로그인하기
          </button>
          <button
            onClick={() => {
              window.location.href = "/request";
            }}
            className="btn-login"
          >
            비회원 멘티로 시작하기
          </button>
          <button
            onClick={() => {
              window.location.href = "/home/requestDetail/requestPage";
            }}
            className="btn-login"
          >
            비회원 멘토로 시작하기
          </button>
        </div>
      </div>
      <style jsx>{`
        .page {
          position: relative;
        }
        .buttons {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          z-index: 10;
          position: absolute;
          bottom: 15%;
          > button {
            position: relative;
            margin: 5px 0;
            cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};

export default index;
