import Map from "@/components/Map";
import { useRouter } from "next/router";
import Request from "../request";

const requestDetail = () => {
  const router = useRouter();
  console.log(router);

  const RequestList = [
    {
      id: 1,
      category: "주문기기",
      mentiName: "이경지",
      dist: 1.2,
      acceptTime: "2023-08-15T18:52:50.637635",
      content:
        "무인 카페에 기계 하나만 덩그러니 놓여있어요. 어떻게 사용하는지 모르겠이요.",
    },
    {
      id: 2,
      category: "휴대폰",
      mentiName: "김멋사",
      dist: 0.9,
      acceptTime: "2023-08-15T18:54:52.637635",
      content: "모바일 은행 서비스를 어떻게 사용하는지 모르겠어요.",
    },
    {
      id: 3,
      category: "컴퓨터",
      mentiName: "홍길동",
      dist: 1,
      acceptTime: "2023-08-15T18:56:55.637635",
      content: "백신을 어떻게 깔아야 하는지 모르겠어요.",
    },
  ];

  const requestId = router.query.id - 1;
  console.log(requestId);

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

  return (
    <>
      <div>
        <Request
          key={RequestList[requestId].id}
          category={RequestList[requestId].category}
          mentiName={RequestList[requestId].mentiName}
          dist={RequestList[requestId].dist}
          content={RequestList[requestId].content}
          onClick={() => onClick(RequestList[requestId].id)}
        ></Request>
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
