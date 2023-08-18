import React, { useState } from "react";
import { useRouter } from "next/router";

function BottomBar() {
    const [activeNav, setActiveNav] = useState(1);

    return (
        <>
            <nav className="wrapper">
                <div onClick={() => {
                    setActiveNav(1);
                    window.location.href="request";
                }}>
                    <img 
                        src="/requestimg/bar_circle.svg"
                        className={activeNav === 1 ? "nav-item active" : "nav-item"}
                    />
                </div>
                <div onClick={() => {
                    setActiveNav(2);
                    window.location.href="";
                }}>
                    <img 
                        src="/requestimg/bar_star.svg"
                        className={activeNav === 2 ? "nav-item active" : "nav-item"}
                    />
                </div>
                <div onClick={() => {
                    setActiveNav(3);
                    window.location.href="";
                }}>
                    <img
                        src="/requestimg/bar_box.svg"
                        className={activeNav === 3 ? "nav-item active" : "nav-item"}
                    />
                </div>
            </nav>
            <div className="imgwrapper">
                <img
                    src="/requestimg/bar_circle_word.svg"
                    className="nav-word"
                />
                <img 
                    src="/requestimg/bar_star_word.svg"
                    className="nav-word"
                />
                <img 
                    src="/requestimg/bar_box_word.svg"
                    className="nav-word"
                />
            </div>
        </>
    );
}
export default BottomBar;