import React, { useState } from 'react';
import { TextField } from '@mui/material';

import './Register.css';

async function registerUser(userName, userNumber) {
    
};

export default function Register({ setToken }){
    const [userName, setUserName] = useState();
    const [userNumber, setUserNumber] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        await registerUser(userName, userNumber);
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
                                placeholder={('User ID')}
                                variant="standard"
                                color="warning"
                                focused
                                fullwidth
                                onChange={e => setUserName(e.target.value)}
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
                                fullwidth
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