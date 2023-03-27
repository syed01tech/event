import React, { useState } from 'react';
import {STAMPS} from "../../stamp";
import {StampPiece} from "./StampPiece"

import "./Stamp.css";

export default function Stamp (props){

    return(
      <div className="stamp_wrapper">
        <div className="stamp_title">
          <p className="title">STAMPS</p>
          <p className="subtitle">Collect stamps to redeem your reward!</p>
        </div>
        <div className='stamp_box'>
          <div className="stamps">
            {" "}
            {STAMPS.map((stamp) => (
              <StampPiece data={stamp} />
            ))}
          </div>
        </div>
        <div className="button_wrapper">
          <button className='scan_btn' onClick={event =>  window.location.href='/home/scan'}>Scan QR</button>
        </div>
        <div className="button_wrapper">
          <button className='redeem_btn' onClick={event =>  window.location.href='/home/coupon'}>Redeem</button>
        </div>
      </div>  
    );
}