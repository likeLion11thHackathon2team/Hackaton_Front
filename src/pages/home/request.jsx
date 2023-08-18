import styled from "styled-components";

const Request = ({ category, mentiName, distance, content }) => {
  return (
    <>
      <RequestDiv>
        <div className="title">
          <div className="title__category">
            <span>{category}</span>
          </div>
          <div className="title__subinfo">
            <span>
              {mentiName}, {distance} KM
            </span>
          </div>
        </div>
        <div className="content">{content}</div>
      </RequestDiv>
    </>
  );
};

const RequestDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 120px;
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
`;

export default Request;
