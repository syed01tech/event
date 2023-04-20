import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate } from 'react-router-dom';

import './AddBoothHelper.css';

const AddBoothHelper = () => {

    const [userid, setUserId] = useState();
    const [boothid, setBoothId] = useState();

    let navigate = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try
        {
            axios.post('', {
                "name":"adminAddBoothHelperApi",
                "param": {
                    "booth_id":boothid,
                    "user_id":userid
                }
            })
            .then((response) => {
                console.log(response.data.booth_status);
                if(response.data.status == 200){
                    console.log("ini dia " + userid);
                    try
                        {
                            axios.post('', {
                                "name":"changeUserRoleApi",
                                "param": {
                                    "role": 2,
                                    "user_id":userid
                                }
                            })
                            .then((response) => {
                                console.log(response.data.booth_status);
                                if(response.data.status == 200){
                                    alert("Congratulation!\nNew Booth Helper Successfully Added.");
                                    navigate("/admin/boothhelper");
                                }else{
                                    alert("Please provide valid input to add booth helper");
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
                }else{
                    alert("Please provide valid input to add booth helper");
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

    return(
        <div className="add_bh_wrapper">
            <Header title={"Add Booth Helper"} button={"1"} path={"/admin/boothhelper"}/>
            <div className="add_bh_body">
                <div className="add_bh_type">
                    <p>Type: <b>Booth Helpers</b></p>
                </div>
                <div className="add_bh_content">
                    <form onSubmit={handleSubmit}>
                        <div className="add_bh_form">
                            <label>
                                <div className='add_bh_form_block'>
                                    <TextField
                                        id="booth_id"
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
                                        placeholder={('Booth ID')}
                                        variant="standard"
                                        type="number"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setBoothId(e.target.value)}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_bh_form_block'>
                                    <TextField
                                        id="user_id"
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
                                        placeholder={('User ID')}
                                        variant="standard"
                                        type="number"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setUserId(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='add_bh_bottom'>
                            <button type="submit" className="add_add_bh_button">{('Add')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBoothHelper;