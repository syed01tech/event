import React, { useState } from "react";
import Header from "../../../Layout/Header/Header";
import {StampPiece} from "./StampPiece"
import axios from "../../../axios";
import TokenService from "../../../TokenService";
import { useNavigate } from 'react-router-dom';

import './BoothMap.css';

const BoothMap = () => {
    const [username, setUserName] = useState();
    const [qrcode, setQrCode] = useState();
    const [exist_stamp, setExistStamp] = useState();
    const [isRedeemable, setIsRedeemable] = useState();
    const [booth, setBooth] = useState();
    const [totalBooth, setTotalBooth] = useState();
    const [buttonText, setButtonText] = useState("Redeem");
    let navigate = useNavigate();

    React.useEffect(() => {
        axios.get('get/', {
            params: {
                name: 'userInfo',
                headers: {
                    'Authorization': 'Bearer ' + TokenService.getToken()
                },
            }
        })
        .then((response) => {
            setUserName(response.data.user_info.user_name);
            setExistStamp(response.data.user_info.booth_ids);
            setBooth(response.data.user_info.booth_ids.length);
        });
    },[])

    React.useEffect(() => {
        axios.get('get/', {
            params: {
                name: 'getBoothApi',
                headers: {
                    'Authorization': 'Bearer ' + TokenService.getToken()
                },
            }
        })
        .then((response) => {
            let array = [];

            for (var i=0; i<12; i++){
                var stamp1 = response.data.booths[i];
                array.push(stamp1);
                //console.log(stamp1);
                //setQrCode(stamp1);
            }

            //console.log(array);
            setQrCode(array);
            setTotalBooth(array.length);


            if(booth >= (totalBooth/2)){
                setIsRedeemable(false);
                setButtonText("Redeem");
            } else {
                setIsRedeemable(true);
                setButtonText("Redeem");
            }
        });
    })

    TokenService.setStamp(exist_stamp);

    function handleRedeem(){
        //navigate('/home/map/couponget');

        if(booth >= (totalBooth/2)){
            if(booth == totalBooth){
                axios.post('', {
                    "name":"createCouponApi",
                    "param": {
                        "coupon_type":2
                    }
                })
                .then((response) => {
                    if(response.data.status == 200){
                        alert( "Congratulations! Please receive your coupon at the gift redemption helper booth" );
                        console.log(response.data.message);
                    }else{
                        console.log(response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            } else {
                axios.post('', {
                    "name":"createCouponApi",
                    "param": {
                        "coupon_type":1
                    }
                })
                .then((response) => {
                    if(response.data.status == 200){
                        alert( "Congratulations! Please receive your gift at the gift redemption helper booth" );
                        console.log(response.data.message);
                    }else{
                        console.log(response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            }
        } else {
            alert('Please attend half or all booths to redeem the coupon/gift!');
        }
    }

    return(
        <div className="bm_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="bm_body">
                <div className="bm_text_wrapper">
                    <div className="bm_text">
                        <p>Attend half booths to get one gift and attend all booths to get one coupon!</p>
                    </div>
                </div>
                <div className="bm_stamp_box">
                    <div className="bm_stamps">
                        {" "}
                        {qrcode?.map((stamp, i) => (
                            <StampPiece key={i} data={stamp}/>
                        ))}
                    </div>
                </div>
                <div  className="bm_bottom">
                    <button style={{backgroundColor: isRedeemable ? "#E0E0E0" : "#57A773", color: isRedeemable ? "#B1B1B1" : "white"}} className="bm_redeem_button" onClick={handleRedeem}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default BoothMap;