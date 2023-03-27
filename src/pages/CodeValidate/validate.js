import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './validate.css';

import axios from "../../axios.js";

function setToken(userToken) {
    sessionStorage.setItem('token', userToken);
}

export default function validate_display(){

    const handleSubmit = async e => {
        const code = document.getElementById('redeem_code').value;
        console.log(code);
        e.preventDefault();
        await validate_code(code);
    };
    // const onChange = (e) => {
    //     // const re = /^[0-9\b]+$/;
    //     // if (e.target.value === '' || re.test(e.target.value)) {
    //     //    setUserNumber(e.target.value)
    //     // }else{
    //     //   setUserNumber(0)//Wrong format to toggle alert on handleSubmit()
    //     // }
    // }
    return(
        <div className='validate-wrapper'>
            <form name="formValidateCode" onSubmit={handleSubmit}>
                <div className='validate-card'>
                    <h1 >Enter Code</h1>
                    <div className='validate-content'>
                            <TextField
                                id="redeem_code"
                                inputProps={{ maxLength: 20}}
                                sx={{
                                "& .MuiInputBase-root": {
                                    color: 'white',
                                    width: '100%'
                                },
                                "& .MuiSvgIcon-root":{
                                    color: 'white',
                                },
                                "& .MuiFormLabel-root":{
                                    color: 'white',
                                },
                                "& .Mui-focused":{
                                    color: 'white',
                                },"& .Mui-focused:before":{
                                    borderBottom: "none"
                                },
                                "& .Mui-focused:after":{
                                    borderBottom: "none"
                                }
                                }}
                                placeholder={('')}
                                variant="standard"
                                color="warning"
                                type="password"
                                focused
                                fullwidth
                                // onChange={e => onChange(e)}
                            />
                    </div>
                </div>
                <div className="button_wrapper">
                    <button type="submit" id="redeem" className='redeem_btn'>Redeem</button>
                    <button type="submit" id="redeemed" className='redeemed_btn' hidden>Redeemed</button>
                </div>
            </form>
        </div>
    )
}

async function validate_code(code) {
    try
    {
       axios.post('', {
        "name":"redeemCouponApi",
        "param": {
            "coupon_redeem_code":code
        }
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.status);
        console.log(response.data.redeem_status);
        if(response.data.status == 200){
          setToken(response.data.token);
          //setIsFirstLogin(response.data.user.requiredPasswordUpdate);
          //setLoginAllowed(response.data.user.isActivated);
          console.log(response.data.redeem_status);
          window.location.replace("/home");
        }else{
            alert("Alert: " + response.data.message );
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    catch (error)
    {
      alert(error);
    }
};