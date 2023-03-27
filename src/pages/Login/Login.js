import React, { useState } from 'react';
import { TextField } from '@mui/material';

import './Login.css';

import axios from "../../axios.js";
import TokenService from '../../TokenService';

function setToken(userToken) {
    sessionStorage.setItem('token', userToken);
}
function getToken() {
    const userToken = sessionStorage.getItem('token');
    return userToken
}
    function setIsFirstLogin(value) {
    sessionStorage.setItem('isFirstLogin', value);
}
function getIsFirstLogin() {
    const isFirstLogin = sessionStorage.getItem('isFirstLogin');
    return isFirstLogin
}
function setLoginAllowed(value) {
    sessionStorage.setItem('loginAllowed', value);
}
function getLoginAllowed() {
    const loginAllowed = sessionStorage.getItem('loginAllowed');
    return loginAllowed
}

async function loginUser(email, password) {
    try
    {
       axios.post('', {
        "name":"generateToken",
        "param": {
            "email":email,
            "pass":password
        }
      })
      .then((response) => {
        console.log(response);
        if(response.data.status == 200){
          setToken(response.data.token);
          //setIsFirstLogin(response.data.user.requiredPasswordUpdate);
          //setLoginAllowed(response.data.user.isActivated);
          window.location.replace("/home");
        }else{
          //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
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

export default function Login (props){
    const [email, setUserEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser(email, password);
    };
    const onChange = (e) => {
        setUserEmail(e.target.value)

        // const re = /^[0-9\b]+$/;
        // if (e.target.value === '' || re.test(e.target.value)) {
        //    setUserEmail(e.target.value)
        // }else{
        //   setUserEmail(0)//Wrong format to toggle alert on handleSubmit()
        // }
    }
    return(
        <div className="login-wrapper">
            <div className="login-page">
                <div className="login-logo">
                    <p>Event Stamp Web</p>
                </div>
                <div className="login-content">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <div className="login-form-block">
                                    <TextField
                                        id=""
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'green',
                                            width: '100%'
                                        },
                                        "& .MuiSvgIcon-root":{
                                            color: 'green',
                                        },
                                        "& .MuiFormLabel-root":{
                                            color: 'green',
                                        },
                                        "& .Mui-focused":{
                                            color: 'green',
                                        },"& .Mui-focused:before":{
                                            borderBottom: "none"
                                        },
                                        "& .Mui-focused:after":{
                                            borderBottom: "none"
                                        }
                                        }}
                                        placeholder={('User ID')}
                                        variant="standard"
                                        type="email"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className="login-form-block">
                                    <TextField
                                        id=""
                                        inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'green',
                                            width: '100%'
                                        },
                                        "& .MuiSvgIcon-root":{
                                            color: 'green',
                                        },
                                        "& .MuiFormLabel-root":{
                                            color: 'green',
                                        },
                                        "& .Mui-focused":{
                                            color: 'green',
                                        },"& .Mui-focused:before":{
                                            borderBottom: "none"
                                        },
                                        "& .Mui-focused:after":{
                                            borderBottom: "none"
                                        }
                                        }}
                                        placeholder={('Password')}
                                        variant="standard"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </label>
                            <div className="login-bottom">
                                <div className="login-bottom-login-button-container">
                                    <button type="submit" className="login-bottom-login-button">{('Login')}</button>
                                </div>
                                {/* <div className="login-bottom-register-button-container">
                                    <button className="login-bottom-register-button" onClick={event =>  window.location.href='/home/changePassword'}>{('Forgot Password')}</button>
                                </div> */}
                                <div className="login-bottom-register-button-container">
                                    <button className="login-bottom-register-button" onClick={event =>  window.location.href='/register'}>{('New User Register')}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}