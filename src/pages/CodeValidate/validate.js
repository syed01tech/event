import React, { useState } from 'react';
import './validate.css';

export default function validate_display(){
    return(
        <div className='validate-wrapper'>
            <form action="/home/stamp">
                <div className='validate-card'>
                    <div className='validate-content'>
                        <h1 >Enter Code</h1>
                        <input type="password" minlength="4" maxlength="4"></input>
                    </div>
                </div>
                <div className="button_wrapper">
                    <button type="submit" className='redeem_btn'>Redeem</button>
                </div>
            </form>
        </div>
    )
}