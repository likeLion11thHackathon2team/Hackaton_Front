import React from "react";

const index = () => {
  return (
    <div>
      <img className="first-img" src="/login/start.png" />
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
          window.location.href = "/help_list";
        }}
        className="btn-login"
      >
        비회원 멘토로 시작하기
      </button>
    </div>
  );
};

export default index;
