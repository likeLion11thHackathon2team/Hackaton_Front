import React from "react";
import axios from "axios";

async function Connect() {
    const response = await axios.post('http://172.30.1.7:8000/requests/',{
        category: '주문기기',
        content: '도와주세요',
        mentiLatitude: 123,
        mentiLongitude: 456,
        menti: 1234,
    })
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        return error;
    });
}

function Content() {
    return (
        <div className="center">
            <div className="content-text">주문기기 관련 요청</div>
            <hr style={{width:'100%'}} />
            <div className="content-text">어떤 부분에서 어려움을 겼으셨나요?</div>
            <textarea className="content-box"
                placeholder="입력하기 ..."
            />
            <button onClick={()=>{Connect}} className="btn-request">도움 요청하기</button>
        </div>

    );
}

export default Content;