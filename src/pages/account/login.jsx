import axios from "axios";
import React, { useState } from "react";
import AccountPage from "@/components/account/AccountPage";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState(null);

  const login = async (data) => {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API}user/login/`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    if (response.status === "200" || response.status === "201") {
      router.push("/mypage/profile");
      localStorage.setItem("userId", response?.name);
      localStorage.setItem("userName", response?.userId);
      localStorage.setItem("userPhoto", response?.photoUrl);
      localStorage.setItem("isMento", response?.isMento);
    } else {
      alert("로그인에 실패했습니다.");
      // setLoginError({
      //   id: "아이디를 입력",
      //   password: "비밀번호를 올바르게 입력해주세요",
      // });
    }
  };

  return (
    <AccountPage pageType={"login"} error={loginError} submitEvent={login} />
  );
};

export default login;
