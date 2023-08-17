import Category from "@/components/request/Category";
import React, { useState } from "react";

function Request() {
    const [activeNav, setActiveNav] = useState(1);
    return (
        <div className="Request">
            <Category firstCategory={'주문기기'} secondCategory={'핸드폰'}/>
            <Category firstCategory={'컴퓨터'} secondCategory={'기타'}/>
            <nav className="wrapper">
                <div onClick={() => setActiveNav(1)}>
                    <img 
                        src="/requestimg/bar_circle.svg"
                        className={activeNav === 1 ? "nav-item active" : "nav-item"}
                    />
                </div>
                <div onClick={() => setActiveNav(2)}>
                    <img 
                        src="/requestimg/bar_star.svg"
                        className={activeNav === 2 ? "nav-item active" : "nav-item"}
                    />
                </div>
                <div onClick={() => setActiveNav(3)}>
                    <img
                        src="/requestimg/bar_box.svg"
                        className={activeNav === 3 ? "nav-item active" : "nav-item"}
                    />
                </div>
            </nav>
            <div className="imgwrapper">
                <img 
                    onClick={() => {window.location.href="request";}}
                    src="/requestimg/bar_circle_word.svg"
                    className="nav-word"
                />
                <img 
                    onClick={() => {window.location.href=""}}
                    src="/requestimg/bar_star_word.svg"
                    className="nav-word"
                />
                <img 
                    onClick={() => {window.location.href=""}}
                    src="/requestimg/bar_box_word.svg"
                    className="nav-word"
                />
            </div>
        </div>
    );
}

export default Request;