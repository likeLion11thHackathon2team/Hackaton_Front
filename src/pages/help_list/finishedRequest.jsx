const FinishedRequest = ({ category, mentiName, content, acceptTime }) => {
  return (
    <>
      <div>
        <span>{category}</span>
        <span>
          {mentiName}, {acceptTime}
        </span>
      </div>
      <div>{content}</div>
    </>
  );
};

export default FinishedRequest;
