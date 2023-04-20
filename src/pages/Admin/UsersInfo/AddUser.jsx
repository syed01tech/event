import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate } from 'react-router-dom';

import './AddUser.css';

const AddUser = () => {
    const [email, setUserEmail] = useState();
    const [name, setName] = useState();
    const [companyName, setCompanyName] = useState();
    const [contact, setContact] = useState();
    const [title, setTitle] = useState();
    const [companyCategory, setCompanyCategory] = useState();

    let navigate = useNavigate();

        const handleSubmit = async e => {
        e.preventDefault();
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
                    alert("Congratulation!\nNew User Account Successfully Registered.");
                    navigate("/admin/usersinfo");
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
        <div className="add_user_wrapper">
            <Header title={"Add Users"} button={"1"} path={"/admin/usersinfo"}/>
            <div className="add_user_body">
                <div className="add_user_type">
                    <p>Type: <b>General Users</b></p>
                </div>
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
                                        onChange={e => setName(e.target.value)}
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
                                        onChange={e => setUserEmail(e.target.value)}
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
                                        onChange={e => setCompanyName(e.target.value)}
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
                                        onChange={e => setCompanyCategory(e.target.value)}
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
                                        onChange={e => onChange(e)}
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
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='add_user_bottom'>
                            <button type="submit" className="add_add_user_button">{('Add')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;