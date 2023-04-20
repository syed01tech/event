import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import banner from '../../assets/event_banner.png';
import back_button from '../../assets/back_login_button.png';

import './Login.css';

import axios from "../../axios.js";
import TokenService from '../../TokenService';

export default function Login (props){
    const [email, setUserEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    function handleNavigate(){
        navigate("/");
    }

    function handleRegister(){
        navigate("/register");
    }

    const handleSubmit = async e => {
        const currentTime = Date.now();

        e.preventDefault();

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
                    if(response.data.user_role == 3){
                        TokenService.setToken(response.data.token);
                        TokenService.setRole(response.data.user_role);
                        TokenService.setLoginTime(currentTime);
                        console.log("Role:" + TokenService.getRole());
                        console.log(currentTime);
                        navigate("/admin/");
                    } else if(response.data.user_role == 2) {
                        TokenService.setToken(response.data.token);
                        TokenService.setRole(response.data.user_role);
                        TokenService.setLoginTime(currentTime);
                        console.log("Role:" + TokenService.getRole());
                        console.log(currentTime);
                        navigate("/boothhelper/");
                    } else if(response.data.user_role == 1) {
                        TokenService.setToken(response.data.token);
                        TokenService.setRole(response.data.user_role);
                        TokenService.setLoginTime(currentTime);
                        console.log("Role:" + TokenService.getRole());
                        console.log(currentTime);
                        navigate("/home");
                    } else if(response.data.user_role == 0) {
                        TokenService.setToken(response.data.token);
                        TokenService.setRole(response.data.user_role);
                        TokenService.setLoginTime(currentTime);
                        console.log("Role:" + TokenService.getRole());
                        console.log(currentTime);
                        navigate("/home");
                    } else if(response.data.user_role == 4){
                        TokenService.setToken(response.data.token);
                        TokenService.setRole(response.data.user_role);
                        TokenService.setLoginTime(currentTime);
                        console.log("Role:" + TokenService.getRole());
                        console.log(currentTime);
                        navigate("/giftredeemhelper/");
                    } else{
                        alert("User role not found")
                    }
                }else{
                //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
                alert(response.data.message);
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
        <div className="login_wrapper">
            <div className='login_banner'>
                <img className='image' src={banner}></img>
            </div>
            <div className='header'>
                <div className='back_button'>
                    <img className='image' src={back_button} onClick={handleNavigate}></img>
                </div>
                <div className='login_title'>
                    <p>Login</p>
                </div>
            </div>
            <div className='login_content'>
                <div className='login_form'>
                    <form onSubmit={handleSubmit} className="login_form_form">
                        <div className="login_form_inside">
                            <label>
                                <div className='login_form_block'>
                                    <TextField
                                        id="email"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '100%'
                                        },
                                        "& .MuiSvgIcon-root":{
                                            color: 'black',
                                        },
                                        "& .MuiFormLabel-root":{
                                            color: 'black',
                                        },
                                        "& .Mui-focused":{
                                            color: 'black',
                                        },"& .Mui-focused:before":{
                                            borderBottom: "1px solid black"
                                        },
                                        "& .Mui-focused:after":{
                                            borderBottom: "1px solid black"
                                        }
                                        }}
                                        placeholder={('Email Address')}
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
                                <div className='login_form_block'>
                                    <TextField
                                        id="password"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '100%'
                                        },
                                        "& .MuiSvgIcon-root":{
                                            color: 'black',
                                        },
                                        "& .MuiFormLabel-root":{
                                            color: 'black',
                                        },
                                        "& .Mui-focused":{
                                            color: 'black',
                                        },
                                        "& .Mui-focused:before":{
                                            borderBottom: "1px solid black"
                                        },
                                        "& .Mui-focused:after":{
                                            borderBottom: "1px solid black"
                                        }
                                        }}
                                        placeholder={('Password')}
                                        variant="standard"
                                        type="password"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='login_bottom'>
                            <button type="submit" className="login_button">{('Login')}</button>
                            <button className="register_buttons" onClick={handleRegister}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}