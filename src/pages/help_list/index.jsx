import FinishedRequest from "./finishedRequest";
import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const RequestPage = () => {
  // 리퀘스트 리스트 리스트 백에서 받기
  const [userId, setUserId] = useState(null); // 사용자 ID 가져와야함
  const [list, setList] = useState(null);

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
  }, []);

  const getList = async () => {
    const response = await axios
      .get(`/requests/record/${userId}/`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    setList(response.list);
  };

  useEffect(() => {
    getList();
  }, []);

  // const RequestList = [
  //   {
  //     id: 1,
  //     category: "주문기기",
  //     mentiName: "이경지",
  //     dist: 1.2,
  //     acceptTime: "2023-08-15T09:52:50.637635",
  //     content:
  //       "무인 카페에 기계 하나만 덩그러니 놓여있어요. 어떻게 사용하는지 모르겠이요.",
  //   },
  //   {
  //     id: 2,
  //     category: "휴대폰",
  //     mentiName: "김멋사",
  //     dist: 0.9,
  //     acceptTime: "2023-08-15T18:54:52.637635",
  //     content: "모바일 은행 서비스를 어떻게 사용하는지 모르겠어요.",
  //   },
  //   {
  //     id: 3,
  //     category: "컴퓨터",
  //     mentiName: "홍길동",
  //     dist: 1,
  //     acceptTime: "2023-08-15T18:56:55.637635",
  //     content: "백신을 어떻게 깔아야 하는지 모르겠어요.",
  //   },
  // ];

  return (
    <RequestPageDiv>
      <div className="page-title">
        <span>내게 들어온 요청</span>
      </div>
      <div className="request-list">
        {list.map((item) => (
          <FinishedRequest
            key={item.id}
            category={item.category}
            mentiName={item.mentiName}
            content={item.content}
            acceptTime={item.acceptTime}
          ></FinishedRequest>
        ))}
      </div>
    </RequestPageDiv>
  );
};

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
  }

  .request-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default RequestPage;
