import Head from "next/head";
import { useEffect } from "react";

export default function Map({ mentoList, mentiList, mapWidth, mapHeight }) {
  const apiKey = "7947194e7bc75e275757762b6e81180f";

  // 카카오 API 호출
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.addEventListener("load", () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            mentiList[0].latitude,
            mentiList[0].longitude
          ), // 초기 중심 좌표 (위도, 경도)
          level: 3, // 지도 확대 레벨
        };
        const map = new window.kakao.maps.Map(container, options);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        const mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        // 마커를 표시할 위치와 title 객체 배열입니다
        let positions = [];

        mentoList.forEach((pos) => {
          positions.push({
            title: pos.title,
            latlng: new kakao.maps.LatLng(pos.latitude, pos.longitude),
            // latitude: pos.latitude,
            // longitude: pos.longitude,
          });
        });

        mentiList.forEach((pos) => {
          positions.push({
            title: pos.title,
            latlng: new kakao.maps.LatLng(pos.latitude, pos.longitude),
            // latitude: pos.latitude,
            // longitude: pos.longitude,
          });
        });

        // 마커 이미지의 이미지 주소입니다
        const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (let i = 0; i < positions.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          const imageSize = new kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

          // 마커를 생성합니다
          const marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
          });

          const iwContent = `
            <div style="padding:4px;">
              ${positions[i].title}
              <br>
              <!---
              <a
                href="https://map.kakao.com/link/map/${positions[i].title},${positions[i].latitute},${positions[i].longitude}"
                style="color:blue"
                target="_blank"
              >
                큰지도보기
              </a>
              <a href="https://map.kakao.com/link/to/${positions[i].title},${positions[i].latitute},${positions[i].longitude}"
                style="color:blue"
                target="_blank"
              >길찾기
              </a>
              --->
            </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(
              positions[i].latitute,
              positions[i].longitude
            ),
            iwRemoveable = true; //인포윈도우 표시 위치입니다

          // 인포윈도우를 생성합니다
          const infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
          });

          // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
          infowindow.open(map, marker);
        }
      });
    });
  }, []);

  return (
    <>
      <div id="map" style={{ width: mapWidth, height: mapHeight }}></div>
      <div class="hAddr">
        <span class="title">지도중심기준 행정동 주소정보</span>
        <span id="centerAddr"></span>
      </div>
    </>
  );
}
