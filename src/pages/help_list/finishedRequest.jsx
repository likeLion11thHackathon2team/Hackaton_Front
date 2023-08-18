import styled from "styled-components";

const FinishedRequest = ({ category, mentiName, content, acceptTime }) => {
  return (
    <RequestDiv>
      <div className="title">
        <div className="title__category">
          <span>{category}</span>
        </div>
        <div className="title__subinfo">
          <span>
            {mentiName}, {acceptTime.substring(0, 10)} &nbsp;
            {Number(acceptTime.substring(11, 13)) >= 12 ? "PM" : "AM"} &nbsp;
            {acceptTime.substring(15, 19)}
          </span>
        </div>
      </div>
      <div className="content">{content}</div>
      <div className="finish-content">
        <span>완료</span>
      </div>
    </RequestDiv>
  );
};

const RequestDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 100%;
  margin: 10px 10px 10px 10px;
  padding: 10px 10px 5px 10px;
  background-color: #f5f5f5;
  font-weight: bold;
  border-radius: 20px;

  .title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &__category {
      background-color: #c2ece7;
      padding: 5px;
      border-radius: 20px;
    }

    &__subinfo {
      color: #635c5c;
    }
  }

  .content {
    padding: 10px;
  }

  .finish-content {
    display: flex;
    justify-content: end;
    margin: 5px;
    color: #089885;
  }
`;

export default FinishedRequest;
