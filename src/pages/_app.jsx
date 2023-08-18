import React from "react";
import "../styles/global.css";
import "../styles/main.css";
import BottomBar from "@/components/bottomBar/BottomBar";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <div className={`app`}>
        <Component {...pageProps} />
        {!router.isReady || (router.asPath !== "/" && <BottomBar />)}
      </div>
      <style jsx>{`
        div.app {
        }
      `}</style>
    </>
  );
}
