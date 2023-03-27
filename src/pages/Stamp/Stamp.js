import React, { useState } from 'react';
import {STAMPS} from "../../stamp";
import {StampPiece} from "./StampPiece"

import "./Stamp.css";
import axios from '../../axios';

import TokenService from '../../TokenService.js';

export default function Stamp (props){
  const [qrcode, setQrCode] = useState();
  const [exist_stamp, setExistStamp] = useState();

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

  function handleClick(){
    if(qrcode.length == exist_stamp.length){
      window.location.replace("/home/coupon");
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
        <button className='scan_btn' onClick={event =>  window.location.href='/home/scan'}>Scan QR</button>
      </div>
      <div className="button_wrapper">
        <button className='redeem_btn' onClick={handleClick}>Redeem</button>
      </div>
    </div>  
  );
}