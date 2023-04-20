import React, { useState } from 'react';
import {STAMPS} from "../../stamp";
import {StampPiece} from "./StampPiece"

import "./Stamp.css";
import axios from '../../axios';

import TokenService from '../../TokenService.js';
import { useNavigate } from 'react-router-dom';

async function checkredeemstatus(){
  const redeemstat = TokenService.getCouponRedeemStatus();
  if (redeemstat === "true"){
    document.getElementById("redeemed_button").style.setProperty('display', 'block', 'important');
    document.getElementById("logout_button").style.setProperty('display', 'block', 'important');
    document.getElementById("redeem_button").style.setProperty('display', 'none', 'important');
    document.getElementById("scan_button").style.setProperty('display', 'none', 'important');
  }
  
}

export default function Stamp (props){
  const [qrcode, setQrCode] = useState();
  const [exist_stamp, setExistStamp] = useState();
  let navigate = useNavigate();

  //TokenService.removeStamp();

  //console.log(TokenService.getStamp());

  React.useEffect(() => {
    axios.get('get/', {
      params: {
        name: 'getStampQRcodeApi',
        headers: {
          'Authorization': 'Bearer ' + TokenService.getToken()
        },
      }
    })
    .then((response) => {
      // console.log("getStampQRcodeApi");
      // console.log(response.data);
      // console.log("-------------");

      for (var i=0; i< response.data.QRcode.length; i++){
        //console.log("----");
        //console.log(response.data.QRcode[i]);
      }

      setQrCode(response.data.QRcode);
      //setArray1(qrcode);
    });

    axios.get('get/', {
      params: {
      name: 'userInfo',
        headers: {
          'Authorization': 'Bearer ' + TokenService.getToken()
        },
      }
    })
    .then((response) => {
      //console.log("userInfo");
      //console.log(response.data);
      //console.log("-------------");

      for (var i=0; i< response.data.user_info.stamp_ids.length; i++){
        //console.log("----");
        //console.log(response.data.user_info.stamp_ids);
        //var exist_stamp = response.data.user_info.stamp_ids[i];
          //if(stamp_id == exist_stamp){
          //    setImage(stamp2);
          //} else {
          //    setImage(stamp1);
          //}
      }

      setExistStamp(response.data.user_info.stamp_ids);
      //setArray2(exist_stamp);
      //console.log(c);

    });
  }, [0])

  TokenService.setStamp(exist_stamp);
  console.log(TokenService.getStamp());

  //handle logout
  function handleLogout(){
    TokenService.removeToken();
    TokenService.removeCouponRedeemStatus();
    TokenService.removeStamp();
    window.location.replace("/");
  }

  //handle stamp amount collected by user full or not.
  function handleClick(){
    // if(qrcode.length == exist_stamp.length){ // check total of all qrcode/stamp available is the same with total qrcode/stamp collected by user
    if(exist_stamp.length >= 6){ // for check qr/stamp collection to 6 or more

    // get collectCouponApi
      axios.get('get/', {
        params: {
        name: 'collectCouponApi',
          headers: {
            'Authorization': 'Bearer ' + TokenService.getToken()
          },
        }
      })
      .then((response) => {
        
        // console.log("user coupons: "+response.data.user_coupons); // check user coupons message
        // console.log("type: " + typeof response.data.user_coupons); // check typeof user coupons value

        if(response.data.user_coupons > 0){ // check if response return coupons id (success) or not
          // console.log("user Coupons message: " + response.data.user_coupons);

          TokenService.setCouponId(response.data.user_coupons); // set coupon_id in session storage
          TokenService.setCouponRedeemStatus(false);
          window.location.replace("/home/coupon");

        } else {
          alert(response.data.user_coupons);
        }
  
      });

    } else {
      alert("Please complete all stamp");
    }
  }

  return(
    <div className="stamp_wrapper">
      <div className="stamp_title">
        <p className="title">STAMPS</p>
        <p className="subtitle">Collect stamps to redeem your reward!</p>
      </div>
      <div className='stamp_box'>
        <div className="stamps">
          {" "}
          {qrcode?.map((stamp, i) => (
            <StampPiece key={i} data={stamp}/>
          ))}
        </div>
      </div>
      <div className="button_wrapper">
        <button id="redeemed_button" className='redeemed_btn' onLoad={checkredeemstatus()}>Redeemed</button>
        <button id="scan_button" className='scan_btn' onLoad={checkredeemstatus()} onClick={event =>  {navigate('/home/scan')}}>Scan QR</button>
      </div>
      <div className="button_wrapper">
        <button id="logout_button" className='logout_btn' onLoad={checkredeemstatus()} onClick={handleLogout}>Logout</button>
        <button id="redeem_button" className='redeem_btn' onLoad={checkredeemstatus()} onClick={handleClick}>Redeem</button>
      </div>
    </div>  
  );
}