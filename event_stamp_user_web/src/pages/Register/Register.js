import React, { useState } from 'react';
import { TextField } from '@mui/material';

import './Register.css';

import axios from "../../axios.js";

async function registerUser(userEmail, userPassword) {
    try
    {
       axios.post('', {
        "name":"register",
        "param": {
            "email":userEmail,
            "password":userPassword
        }
      })
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          if(response.data.status === 200){
            // alert((i18n.language == 'zh_hk')?"已發送註冊要求，管家將於1-2個工作天內以Whatsapp聯絡您並激活帳戶。":"已发送注册要求，管家将于1-2个工作天内以Whatsapp联络您并激活帐户。");
            //const url = (i18n.language == 'zh_hk')?'https://wa.me/85269990899?text=您好，我想註冊成為管家婆會員。%0a姓名:'+userName+'%0a電話號碼:'+userNumber:'https://wa.me/85269990899?text=您好，我想注册成为管家婆会员。%0a 姓名:'+userName+'%0a 电话号码:'+userNumber;
            //window.open(url,'_self');
            window.location.replace("/");
            alert(response.data.message);
          }else{
            alert(response.data.message);
          }
        }else{
          //alert((i18n.language == 'zh_hk')?"連接出現問題！請聯絡相關技術人員！":"连接出现问题！请联络相关技术人员！");
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

export default function Register({ setToken }){
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        //console.log(userEmail);
        await registerUser(userEmail, userPassword);
    };
    const onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setUserPassword(e.target.value)
        }else{
          setUserPassword(0)//Wrong format to toggle alert on handleSubmit()
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="register-wrapper">
                    <div className='register-content'>
                        <div className="register-logo">
                            <p>Registration</p>
                        </div>
                        <div className="register-block">
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
                                placeholder={('Email')}
                                variant="standard"
                                color="warning"
                                focused
                                fullwidth="true"
                                onChange={e => setUserEmail(e.target.value)}
                            />
                        </div>
                        <div className="register-block">
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
                                placeholder={('Password')}
                                variant="standard"
                                color="warning"
                                focused
                                fullwidth="true"
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="register-button-container">
                            <button type="submit" className="register-button">{('Register')}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};