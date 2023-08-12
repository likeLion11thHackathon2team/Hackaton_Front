import React from "react";

function Content() {
    return (
        <div className="center">
            <div className="content-text">주문기기 관련 요청</div>
            <hr style={{width:'100%'}} />
            <div className="content-text">어떤 부분에서 어려움을 겼으셨나요?</div>
            <textarea className="content-box"
                placeholder="입력하기 ..."
            />
            <button className="btn-request">도움 요청하기</button>
        </div>

    );
}

export default Content;