import React, { useState } from "react";
import { useRouter } from "next/router";

function BottomBar() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <>
      <div className={`bottom`}>
        <nav className="wrapper">
          <div
            onClick={() => {
              setActiveNav(1);
              window.location.href = "/request";
            }}
          >
            <img
              src="/requestimg/bar_circle.svg"
              className={activeNav === 1 ? "nav-item active" : "nav-item"}
            />
          </div>
          <div
            onClick={() => {
              setActiveNav(2);
              window.location.href = "/help_list";
            }}
          >
            <img
              src="/requestimg/bar_star.svg"
              className={activeNav === 2 ? "nav-item active" : "nav-item"}
            />
          </div>
          <div
            onClick={() => {
              setActiveNav(3);
              window.location.href = "/mypage";
            }}
          >
            <img
              src="/requestimg/bar_box.svg"
              className={activeNav === 3 ? "nav-item active" : "nav-item"}
            />
          </div>
        </nav>
        <div className="imgwrapper">
          <img src="/requestimg/bar_circle_word.svg" className="nav-word" />
          <img src="/requestimg/bar_star_word.svg" className="nav-word" />
          <img src="/requestimg/bar_box_word.svg" className="nav-word" />
        </div>
      </div>
      <style jsx>{`
        div.bottom {
          position: fixed;
          bottom: 0;
          width: 100%;
          max-width: 30rem;
        }
      `}</style>
    </>
  );
}
export default BottomBar;
