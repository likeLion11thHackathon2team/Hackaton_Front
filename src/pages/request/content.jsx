import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import useGeolocation from "react-hook-geolocation";


function Content() {
    const router = useRouter();
    const [content, setContent] = useState();
    const geolocation = useGeolocation();
    const [mentiLatitude, setMentiLatitude] = useState('')
    const [mentiLongtitude, setMentiLongtitude] = useState('');

    async function Connect() {
        const response = await axios.post('http://172.30.1.7:8000/requests/menti/',{
            category: '주문기기',
            content: content,
            mentiLatitude: mentiLatitude,
            mentiLongitude: mentiLongtitude,
            menti: 1,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error;
        });
    }

    async function ConnectQuit() {
        const response = await axios.delete('/requests/id',{
            id: 1,
        })
        .then((response) => {
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
            console.log("현재 위치는 :" + mentiLatitude + ","+ mentiLongtitude);
        });
    });
    
    return (
        <div className="center">
            <div className="content-text">주문기기 관련 요청</div>
            <hr style={{width:'100%'}} />
            <div className="content-text">어떤 부분에서 어려움을 겼으셨나요?</div>
            <textarea className="content-box"
                placeholder="입력하기 ..."
                onChange={()=>{setContent(content)}}
            />
            <button onClick={()=>{Connect()}} className="btn-request">도움 요청하기</button>
            <button onClick={()=>{ConnectQuit()}} className="btn-quit">요청 취소하기</button>
        </div>
    );
}

export default Content;
