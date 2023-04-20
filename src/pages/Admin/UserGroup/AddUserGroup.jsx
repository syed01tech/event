import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate } from 'react-router-dom';

import TokenService from '../../../TokenService.js';
import './AddUserGroup.css';

const AddUserGroup = () => {
    const [groupName, setGroupName] = useState();
    const [groupDesc, setGroupDesc] = useState();
    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try
        {
            axios.post('', {
                "name":"adminCreateGroupApi",
                "headers": {
                'Authorization': 'Bearer ' + TokenService.getToken()
                },
                "param": {
                    "group_name": groupName,
                    "group_description":groupDesc,
                }
            })
            .then((response) => {
                console.log(response.data.message);
                if(response.data.status == 200){
                    alert("New User Group Added Successfully.");
                    navigate("/admin/usergroup");
                }else{
                    alert("Please provide valid input to add group");
                //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
                }
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
            }
            catch (error)
            {
            alert(error);
        }
    }

    return(
        <div className="add_ug_wrapper">
            <Header title={"Add User Group"} button={"1"} path={"/admin/usergroup"}/>
            <div className="add_ug_body">
                <div className="add_ug_content">
                    <form onSubmit={handleSubmit}>
                        <label>
                            <div className='ug_form_block'>
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
                                    placeholder={('Group Name')}
                                    variant="standard"
                                    color="warning"
                                    focused
                                    fullwidth="true"
                                    onChange={e => setGroupName(e.target.value)}
                                />
                            </div>
                            <div className='ug_form_block'>
                                <TextField
                                    id="description"
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
                                    placeholder={('Group Description')}
                                    variant="standard"
                                    color="warning"
                                    focused
                                    fullwidth="true"
                                    onChange={e => setGroupDesc(e.target.value)}
                                />
                            </div>
                        </label>
                        <div className='add_ug_bottom'>
                            <button type="submit" className="add_ug_button">{('Add')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUserGroup;