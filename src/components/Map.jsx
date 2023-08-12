import Head from "next/head";
import { useEffect } from "react";

// JavaScript 키 (지도 API의 appkey)
// 7947194e7bc75e275757762b6e81180

export default function Map({ latitude, longitude }) {
  const apiKey = "7947194e7bc75e275757762b6e81180f";

  // 카카오 API 호출
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude), // 초기 중심 좌표 (위도, 경도)
          level: 3, // 지도 확대 레벨
        };
        new window.kakao.maps.Map(container, options);
      });
    });
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
    </>
  );
}
