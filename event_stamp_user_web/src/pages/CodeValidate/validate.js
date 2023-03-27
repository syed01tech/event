import React, { useState } from 'react';
import { TextField } from '@mui/material';
import './validate.css';

export default function validate_display(){
    // const [userNumber, setUserNumber] = useState();

    const onChange = (e) => {
        // const re = /^[0-9\b]+$/;
        // if (e.target.value === '' || re.test(e.target.value)) {
        //    setUserNumber(e.target.value)
        // }else{
        //   setUserNumber(0)//Wrong format to toggle alert on handleSubmit()
        // }
    }
    return(
        <div className='validate-wrapper'>
            <form action="/home/stamp">
                <div className='validate-card'>
                    <h1 >Enter Code</h1>
                    <div className='validate-content'>
                        {/* <input type="password" minlength="4" maxlength="4"></input> */}
                            <TextField
                                id=""
                                inputProps={{ maxLength: 4}}
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
                                onChange={e => onChange(e)}
                            />
                    </div>
                </div>
                <div className="button_wrapper">
                    <button type="submit" className='redeem_btn'>Redeem</button>
                </div>
            </form>
        </div>
    )
}