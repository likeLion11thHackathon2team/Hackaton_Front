import React from "react";


function Request() {
    return (
        <div className="Request">
            <div className="main1">
                <button type="button" className="btn btn-order">
                    <img className="home_img" src={'/requestimg/home_moniter.svg'}></img>
                </button>
                <button className="btn btn-phone">
                    <img className="home_img" src={''}/>
                </button>
            </div>
            <div className="home_text">
                주문기기
            </div>
            <div className="main2">
                <button className="btn btn-computer">
                    <img className="home_img" src={''}/>
                </button>
                <button className="btn btn-etc">
                    <img className="home_img" src={''}/>
                </button>
            </div>
        </div>
    );
}

export default Request;