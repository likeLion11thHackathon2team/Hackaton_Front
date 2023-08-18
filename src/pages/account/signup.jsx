import axios from "axios";
import React, { useState } from "react";
import AccountPage from "@/components/account/AccountPage";
import { useRouter } from "next/router";

const signupPage = () => {
  const router = useRouter();
  const [signupError, setSignupError] = useState(null);

  const signup = async (data) => {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API}user/signup/`, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    console.log(response);
    if (response.status === "200" || response.status === "201") {
      alert("회원가입에 성공했습니다.");
      router.push(`/mypage/profile`);
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <AccountPage pageType={"signup"} error={signupError} submitEvent={signup} />
  );
};

export default signupPage;
