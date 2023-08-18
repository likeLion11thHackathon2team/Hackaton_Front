import { useRouter } from "next/router";
import Request from "./request";
import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const RequestPage = () => {
  const router = useRouter();

  // 멘티 위도 경도 백으로 보내기
  const [mentiLatitude, setMentiLatitude] = useState(13);
  const [mentiLongtitude, setMentiLongtitude] = useState(131);
  const onClick = (id) => {
    router.push(
      {
        pathname: `/requestDetail/${id}`,
        query: {
          id: id,
        },
      },
      `/home/requestDetail/${id}`
    );
  };

  // RequestList Mock Data
  // const list = [
  //   {
  //     category: "주문기기",
  //     mentiName: "이경지",
  //     distance: 1.2,
  //     acceptTime: "2023-08-15T18:52:50.637635",
  //     mentiLatitude: 12.123,
  //     mentiLongitude: 12.123,
  //     content:
  //       "무인 카페에 기계 하나만 덩그러니 놓여있어요. 어떻게 사용하는지 모르겠이요.",
  //   },
  //   {
  //     category: "휴대폰",
  //     mentiName: "김멋사",
  //     distance: 0.9,
  //     acceptTime: "2023-08-15T18:54:52.637635",
  //     mentiLatitude: 12.123,
  //     mentiLongitude: 12.123,
  //     content: "모바일 은행 서비스를 어떻게 사용하는지 모르겠어요.",
  //   },
  //   {
  //     category: "컴퓨터",
  //     mentiName: "홍길동",
  //     distance: 1,
  //     acceptTime: "2023-08-15T18:56:55.637635",
  //     mentiLatitude: 12.123,
  //     mentiLongitude: 12.123,
  //     content: "백신을 어떻게 깔아야 하는지 모르겠어요.",
  //   },
  // ];

  // 리퀘스트 리스트 리스트 백에서 받기
  const [list, setList] = useState(null);

  const getList = async () => {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API}request/mento/`, {
        mentoLatitude: mentiLatitude,
        mentoLongitude: mentiLongtitude,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    const _list = JSON.parse(JSON.stringify(response.list));

    _list?.forEach((item, i) => {
      item.id = i;
    });
    setList(_list);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      const latitude = pos.coords.latitude;
      const longitude = pos.coords.longitude;
      setMentiLatitude(latitude);
      setMentiLongtitude(longitude);
      // console.log("현재 위치는 :" + mentiLatitude + ","+ mentiLongtitude);
    });
  });

  async function Connect() {
    const response = await axios
      .post(`${process.env.NEXT_PUBLIC_API}requests/menti/`, {
        mentiLatitude: mentiLatitude,
        mentiLongitude: mentiLongtitude,
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

  return (
    <RequestPageDiv>
      <div className="page-title">
        <span>내게 들어온 요청</span> &nbsp;
        <span className="request-count">{list?.length}</span>
      </div>
      <div className="request-list">
        {list &&
          list.map((item) => (
            <div key={item.id} onClick={() => onClick(item.id)}>
              <Request
                key={item.id}
                category={item.category}
                mentiName={item.mentiName}
                distance={item.distance}
                content={item.content}
              />
            </div>
          ))}
      </div>
    </RequestPageDiv>
  );
};

// 100vw, 480px*300px

const RequestPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  .page-title {
    display: flex;
    justify-content: flex-start;
    margin: 10px;
    font-size: 30px;
    font-style: bold;

    .request-count {
      color: #089885;
    }
  }

  .request-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default RequestPage;
