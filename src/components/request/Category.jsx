import { useRouter } from "next/router";

function Category({firstCategory, secondCategory}){
    const router = useRouter()
    function movePage(category) {
        router.push(`/request/content/?category=${category}`)
    }

    return(
        <>
            <div className={`${firstCategory === '주문기기' ? 'main1' : 'main2'}`}>
                <button onClick={()=>{movePage(firstCategory)}}className={`btn ${firstCategory === '주문기기' ? 'btn-order' : 'btn-computer'}`}>
                    {firstCategory === '주문기기' ? 
                    <img className="home_img" src={'/requestimg/home_order.svg'}/>
                    : <img className="home_img" src={'/requestimg/home_moniter.svg'}/>
                    }
                </button>
                <button onClick={()=>{movePage(secondCategory)}} className={`btn ${secondCategory === '핸드폰' ? 'btn-phone' : 'btn-etc'}`}>
                    {secondCategory === '핸드폰' ?
                    <img className="home_img" src={'/requestimg/home_phone.svg'}/>
                    : <img className="home_img" src={'/requestimg/home_etc.svg'}/>
                    }
                </button>
            </div>
            <div className="home_text">
                <div>{firstCategory}</div>
                <div>{secondCategory}</div>
            </div>

        </>
    );
}

export default Category;