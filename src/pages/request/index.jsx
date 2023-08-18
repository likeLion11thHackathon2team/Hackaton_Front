import Category from "@/components/request/Category";
import BottomBar from "@/components/bottomBar/BottomBar";
import React from "react";

function Request() {
    return (
        <div className="Request">
                <img className="logo" src="/requestimg/logo.svg"/>
                <img className="profile" src="/login/profile_female.svg"/>
            <Category firstCategory={'주문기기'} secondCategory={'핸드폰'}/>
            <Category firstCategory={'컴퓨터'} secondCategory={'기타'}/>
            <BottomBar />
        </div>
    );
}

export default Request;