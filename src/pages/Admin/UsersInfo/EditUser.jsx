import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate, useLocation } from 'react-router-dom';

import './EditUser.css';

const EditUser = props => {
    const location = useLocation();
    let navigate = useNavigate();

    const [userId, setUserId] = useState(location.state.user_id);
    const [email, setUserEmail] = useState(location.state.email);
    const [name, setName] = useState(location.state.user_name);
    const [company_name, setCompanyName] = useState(location.state.company_name);
    const [company_category, setCompanyCat] = useState(location.state.company_category);
    const [title, setTitle] = useState(location.state.title);
    const [contact, setContact] = useState(location.state.contact);

    const handleSubmit = async e => {
        e.preventDefault();

        if(!contact || contact == ""){
            alert("Please provide contact input in numeric value");
        } else {
            try
            {
                axios.post('', {
                    "name":"adminUpdateUserInfoApi",
                    "param": {
                        "user_id": userId,
                        "email":"",
                        "password":"",
                        "user_name":name,
                        "company_name":company_name,
                        "company_category":company_category,
                        "title":title,
                        "contact":contact
                    }
                })
                .then((response) => {
                    //console.log(response.data.message);
                    if(response.data.status == 200){
                        alert("User Account Edit Successfully.");
                        navigate("/admin/usersinfo");
                        //alert(email + name + company_name + company_category + title + contact);
                    }else{
                        alert("Please provide valid input to add user");
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
    };

    const handleChangeName = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const handleChangeCompanyName = (event) => {
        const value = event.target.value;
        setCompanyName(value);
    };

    const handleChangeCompanyCat = (event) => {
        const value = event.target.value;
        setCompanyCat(value);
    };

    const handleChangeTitle = (event) => {
        const value = event.target.value;
        setTitle(value);
    };

    const handleChangeContact = (event) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setContact(event.target.value);
        }else{
            setContact(0);
        }
    };

    return(
        <div className="add_user_wrapper">
            <Header title={"Edit User"} button={"1"} path={"/admin/usersinfo"}/>
            <div className="add_user_body">
                <div className="add_user_content">
                    <form onSubmit={handleSubmit}>
                        <div className="add_user_form">
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="name"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        value={name}
                                        onChange={handleChangeName}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="email"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        value={email}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="company_name"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        value={company_name}
                                        onChange={handleChangeCompanyName}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="company_category"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        value={company_category}
                                        onChange={handleChangeCompanyCat}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="title"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        value={title}
                                        onChange={handleChangeTitle}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_user_form_block'>
                                    <TextField
                                        id="contact"
                                        //inputProps={{ maxLength: 8}}
                                        sx={{
                                        "& .MuiInputBase-root": {
                                            color: 'black',
                                            width: '300px'
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
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        value={contact}
                                        onChange={handleChangeContact}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='add_user_bottom'>
                            <button type="submit" className="add_add_user_button">{('Save')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;