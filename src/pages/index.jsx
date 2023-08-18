import React from "react";

const index = () => {
  return (
    <div>
      <img className="first-img" src="/login/start.png"/>
        <button onClick={()=>{window.location.href='/account/login'}} className="btn-login">로그인하기</button>
    </div>
  );
};

export default index;