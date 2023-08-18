import axios from "axios";
import React, { useState } from "react";
import AccountPage from "@/components/account/AccountPage";
import { useRouter } from "next/router";

const signupPage = () => {
  const router = useRouter();
  const [signupError, setSignupError] = useState(null);

  const signup = async (data) => {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API}user/signup`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    console.log(response);
    if (response.status === "200") {
      router.push(`/mypage/profile`);
    } else {
      setSignupError({
        id: "아이디를 입력",
        password: "비밀번호를 올바르게 입력해주세요",
      });
    }
  };

  return (
    <AccountPage pageType={"signup"} error={signupError} submitEvent={signup} />
  );
};

export default signupPage;
