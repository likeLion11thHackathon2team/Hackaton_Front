const Request = ({ category, mentiName, dist, content }) => {
  return (
    <>
      <div>
        <span>{category}</span>
        <span>
          {mentiName}, {dist} KM
        </span>
      </div>
      <div>{content}</div>
    </>
  );
};

export default Request;
