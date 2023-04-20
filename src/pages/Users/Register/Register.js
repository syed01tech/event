import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import banner from '../../../assets/event_banner.png';
import back_button from '../../../assets/back_login_button.png';

import './Register.css';

import axios from "../../../axios.js";

export default function Register (props){
    const [email, setUserEmail] = useState();
    const [name, setName] = useState();
    const [companyName, setCompanyName] = useState();
    const [contact, setContact] = useState();
    const [title, setTitle] = useState();
    const [companyCategory, setCompanyCategory] = useState();

    let navigate = useNavigate();

    function handleNavigate(){
        navigate("/user");
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if(!email || email == ""){
            alert("Please provide email input");
        } else {
            if(!companyName || companyName == ""){
                alert("Please provide company name input");
            } else {
                if(!companyCategory || companyCategory == ""){
                    alert("Please provide company category input");
                } else {
                    if(!title || title == ""){
                        alert("Please provide title input");
                    } else {
                        if(!contact || contact == ""){
                            alert("Please provide contact input in numeric value");
                        } else {
                            if(!name || name == ""){
                                alert("Please provide name input");
                            } else {
                                try
                                {
                                    axios.post('', {
                                        "name":"register",
                                        "param": {
                                            "email":email,
                                            "company_name":companyName,
                                            "company_category":companyCategory,
                                            "title":title,
                                            "contact":contact,
                                            "user_name":name
                                        }
                                    })
                                    .then((response) => {
                                        console.log(response.data.message);
                                        if(response.data.status == 200){
                                            alert("Congratulation!\nNew Account Successfully Registered.");
                                            navigate("/register/complete");
                                        }else{
                                            alert("Please provide valid input for registration");
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
                            }
                        }
                    }
                }
            }
        }
    };

    const onChange = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setContact(e.target.value)
        }else{
            setContact(0)
            //Wrong format to toggle alert on handleSubmit()
        }
    }
    
    return(
        <div className="register_wrapper">
            <div className='register_banner'>
                <img className='image' src={banner}></img>
            </div>
            <div className='register_header'>
                <div className='register_back_button'>
                    <img className='image' src={back_button} onClick={handleNavigate}></img>
                </div>
                <div className='register_title'>
                    <p>Registration</p>
                </div>
            </div>
            <div className='register_content'>
                <div className='register_form'>
                    <form onSubmit={handleSubmit} className='register_form_form'>
                        <div className='register_form_inside'>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="name"
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
                                        placeholder={('Name')}
                                        variant="standard"
                                        type="text"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="company_name"
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
                                        placeholder={('Company Name')}
                                        variant="standard"
                                        type="text"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setCompanyName(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="contact"
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
                                        placeholder={('Contact')}
                                        variant="standard"
                                        type="text"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => onChange(e)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="title"
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
                                        placeholder={('Title')}
                                        variant="standard"
                                        type="text"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="register_email"
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
                                        onChange={e => setUserEmail(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='register_form_block'>
                                    <TextField
                                        id="company_category"
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
                                        placeholder={('Company Category')}
                                        variant="standard"
                                        type="text"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setCompanyCategory(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='register_bottom'>
                            <button type="submit" className="register_button">{('Register')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}