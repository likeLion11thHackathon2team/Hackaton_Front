import Category from "@/components/request/Category";
import React from "react";

function Request() {
    return (
        <div className="Request">
            <Category firstCategory={'주문기기'} secondCategory={'핸드폰'}/>
            <Category firstCategory={'컴퓨터'} secondCategory={'기타'}/>
        </div>
    );
}

export default Request;