import Map from "@/components/map/Map";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Request from "../request";
// import styled from "styled-components";

const requestDetail = () => {
  const router = useRouter();
  console.log(router);

  // 리퀘스트 리스트 리스트 백에서 받기
  // const [list, setList] = useState(null);

  // const getList = async () => {
  //   const response = await axios
  //     .get("/api/login"requests/mento/)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
  //   setList(response.list);
  // };

  // useEffect(() => {
  //   getList();
  // }, []);

  // 리퀘스트 리스트 Mock Data
  const list = [
    {
      id: 0,
      category: "주문기기",
      mentiName: "이경지",
      dist: 1.2,
      acceptTime: "2023-08-15T18:52:50.637635",
      mentiLatitude: 12.123,
      mentiLongitude: 12.123,
      content:
        "무인 카페에 기계 하나만 덩그러니 놓여있어요. 어떻게 사용하는지 모르겠이요.",
    },
    {
      id: 1,
      category: "휴대폰",
      mentiName: "김멋사",
      dist: 0.9,
      acceptTime: "2023-08-15T18:54:52.637635",
      mentiLatitude: 12.123,
      mentiLongitude: 12.123,
      content: "모바일 은행 서비스를 어떻게 사용하는지 모르겠어요.",
    },
    {
      id: 2,
      category: "컴퓨터",
      mentiName: "홍길동",
      dist: 1,
      acceptTime: "2023-08-15T18:56:55.637635",
      mentiLatitude: 12.123,
      mentiLongitude: 12.123,
      content: "백신을 어떻게 깔아야 하는지 모르겠어요.",
    },
  ];

  const requestId = router.query.id;
  // console.log(requestId);

  // 멘토 리스트 Mock Data
  const mentoList = [
    {
      title: "멘토",
      latitude: 33.450705,
      longitude: 126.570677,
    },
    {
      title: "멘토",
      latitude: 33.450936,
      longitude: 126.569477,
    },
  ];

  // 멘티 리스트 Mock Data
  const mentiList = [
    {
      title: "멘티",
      latitude: 33.450879,
      longitude: 126.56994,
    },
    {
      title: "멘티",
      latitude: 33.451393,
      longitude: 126.570738,
    },
  ];

  // 멘토 위도 경도 백으로 보내기
  const [mentoLatitude, setMentoLatitude] = useState("");
  const [mentoLongitude, setMentoLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      setMentoLatitude(latitude);
      setMentoLongitude(longitude);
      console.log("현재 위치는 :" + mentoLatitude + "," + mentoLongitude);
    });
  });

  async function Connect() {
    const response = await axios
      .post("http://192.168.160.83/requests/menti/", {
        mentoLatitude: mentoLatitude,
        mentoLongitude: mentoLongitude,
      })
      .then((response) => {
        // window.location.href = `/request/find?request=${id}`;
        // router.push()
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  useEffect(() => {
    Connect();
  }, []);

  // const mentoList = [];

  // mentoList.push({
  //   title: "멘토",
  //   latitude: mentoLatitude,
  //   longitude: mentoLongitude,
  // });

  // const mentiList = [];

  // mentiList.push({
  //   title: "멘티",
  //   latitude: list[id].mentiLatitude,
  //   longitude: list[id].mentiLongitude,
  // });

  return (
    <>
      <div>
        {router.query.id && (
          <Request
            key={list[requestId].id}
            category={list[requestId].category}
            mentiName={list[requestId].mentiName}
            dist={list[requestId].dist}
            content={list[requestId].content}
            onClick={() => onClick(list[requestId].id)}
          ></Request>
        )}
      </div>
      <div>
        <Map
          mentoList={mentoList}
          mentiList={mentiList}
          mapWidth={"100%"}
          mapHeight={"400px"}
        />
      </div>
    </>
  );
};

export default requestDetail;
