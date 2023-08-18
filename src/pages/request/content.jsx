import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Content() {
    const router = useRouter();
    const [content, setContent] = useState();
    const geolocation = useGeolocation();
    const [mentiLatitude, setMentiLatitude] = useState('')
    const [mentiLongtitude, setMentiLongtitude] = useState('');
    const id = localStorage.getItem("userId");

    async function Connect() {
        const response = await axios.post('http://192.168.160.83/requests/menti/',{
            category: router.query.category,
            content: content,
            mentiLatitude: mentiLatitude,
            mentiLongitude: mentiLongtitude,
            menti: id,
        })
        .then((response) => {
            window.location.href=`/request/find?request=${id}`;
            // router.push()
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    }

    useEffect(() => {    
        navigator.geolocation.getCurrentPosition(function(pos) {
            var latitude = pos.coords.latitude;
            var longitude = pos.coords.longitude;
            setMentiLatitude(latitude);
            setMentiLongtitude(longitude);
            // console.log("현재 위치는 :" + mentiLatitude + ","+ mentiLongtitude);
        });
    });

    return (
        <div className="center">
            <div className="content-text">주문기기 관련 요청</div>
            <hr style={{width:'100%'}} />
            <div className="content-text">어떤 부분에서 어려움을 겼으셨나요?</div>
            <textarea className="content-box"
                placeholder="입력하기 ..."
                onChange={(e) => {setContent(e.target.value)}}
            />
            <button onClick={()=>{
                Connect();
                // setContent(content);
                }} className="btn-request">도움 요청하기</button>
        </div>
    );
}

export default Content;
