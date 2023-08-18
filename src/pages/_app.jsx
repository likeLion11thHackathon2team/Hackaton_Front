import React from "react";
import "../styles/global.css";
import "../styles/main.css";
import BottomBar from "@/components/bottomBar/BottomBar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`app`}>
        <Component {...pageProps} />
        <BottomBar />
      </div>
      <style jsx>{`
        div.app {
        }
      `}</style>
    </>
  );
}
