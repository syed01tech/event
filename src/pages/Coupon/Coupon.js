import React, { useState } from 'react';
import './Coupon.css';

export default function coupon_display(){
    return(
        <div className='coupon-wrapper'>
            <div className='coupon-card'>
                <div className='coupon-content'>
                       <h1 >Coupon</h1>
                       <h3>-Sunday-</h3>
                       <h3>-market</h3>
                       <h2>HKD $100</h2>    
                </div>
            </div>
            <div className="button_wrapper">
                <button className='redeem_btn' onClick={event =>  window.location.href='/home/coupon/validate'}>Redeem</button>
            </div>
        </div>
    )
}