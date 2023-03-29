import React, { useState } from 'react';
import { TextField } from '@mui/material';

import banner from '../../../assets/event_banner.png';
import back_button from '../../../assets/back_login_button.png';

import './AdminLogin.css';

import axios from "../../../axios";
import TokenService from '../../../TokenService';
import { padding } from '@mui/system';

function setToken(userToken) {
    sessionStorage.setItem('token', userToken);
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

export default function AdminLogin (props){
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
        <div className="login_wrapper">
            <div className='login_banner'>
                <img className='image' src={banner}></img>
            </div>
            <div className='header'>
                <div className='back_button'>
                    <img className='image' src={back_button}></img>
                </div>
                <div className='login_title'>
                    <p>Login</p>
                </div>
            </div>
            <div className='login_content'>
                <div className='login_form'>
                    <form>
                        <label>
                            <div className='login_form_block'>
                            <TextField
                                        id=""
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
                                    id=""
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
                        <div className='login_bottom'>
                            <button type="submit" className="login_button">{('Login')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}