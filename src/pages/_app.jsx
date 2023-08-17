import React from "react";
import "../styles/global.css";
import "../styles/main.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
