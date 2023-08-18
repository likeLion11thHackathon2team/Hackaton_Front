import styled from "styled-components";

const Request = ({ category, mentiName, dist, content }) => {
  return (
    <>
      <RequestDiv>
        <span>{category}</span>
        <span>
          {mentiName}, {dist} KM
        </span>
      </RequestDiv>
      <div>{content}</div>
    </>
  );
};

const RequestDiv = styled.div`
  display: flex;
`;

export default Request;
