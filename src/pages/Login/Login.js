import React, { useState } from 'react';
import { TextField } from '@mui/material';

import './Login.css';

async function loginUser(userNumber, password) {
};

export default function Login (props){
    const [userNumber, setUserNumber] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await loginUser(userNumber, password);
    };
    const onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
           setUserNumber(e.target.value)
        }else{
          setUserNumber(0)//Wrong format to toggle alert on handleSubmit()
        }
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
                                        color="warning"
                                        focused
                                        fullwidth
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
                                        },
                                        "& .Mui-focused:before":{
                                            borderBottom: "none"
                                        },
                                        "& .Mui-focused:after":{
                                            borderBottom: "none"
                                        }
                                        }}
                                        placeholder={('Password')}
                                        variant="standard"
                                        type="password"
                                        color="warning"
                                        focused
                                        fullwidth
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                            </label>
                            <div className="login-bottom">
                                <div className="login-bottom-login-button-container">
                                    <button type="submit" className="login-bottom-login-button" onClick={event =>  window.location.href='/home'}>{('Login')}</button>
                                </div>
                                <div className="login-bottom-register-button-container">
                                    <button className="login-bottom-register-button" onClick={event =>  window.location.href='/home/changePassword'}>{('Forgot Password')}</button>
                                </div>
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