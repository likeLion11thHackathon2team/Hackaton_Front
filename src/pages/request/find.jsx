import React from "react";
import axios from "axios";

import { useRouter } from "next/router";
function Find() {
  const router = useRouter();

  async function ConnectQuit() {
    const response = await axios
      .delete(`${process.env.NEXT_PUBLIC_API}requests/${router.query.id}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  if (router.isReady) {
    return (
      <div>
        <img
          className="find-word"
          src="/findimg/1KM 이내의 멘토 유저 찾는 중. . ..svg"
        />
        <button
          onClick={() => {
            ConnectQuit();
            alert("요청이 취소되었습니다.");
          }}
          className="btn-quit"
        >
          요청 취소하기
        </button>
        <img className="find-background" src="/findimg/findBackgroundImg.png" />
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default Find;
