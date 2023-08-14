import Map from "../components/Map";

export default function App() {
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
      <div>Hello</div>
      <Map
        mentoList={mentoList}
        mentiList={mentiList}
        mapWidth={"100%"}
        mapHeight={"400px"}
      />
    </>
  );
}
