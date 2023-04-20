import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate } from 'react-router-dom';

import './AddGiftRedeemHelper.css';

const AddGiftRedeemHelper = () => {

    const [userid, setUserId] = useState();
    const [boothid, setBoothId] = useState();

    let navigate = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try
        {
            axios.post('', {
                "name":"adminAddGiftRedemptionHelperApi",
                "param": {
                    "booth_id":boothid,
                    "user_id":userid
                }
            })
            .then((response) => {
                console.log(response.data.booth_status);
                if(response.data.status == 200){
                    try
                        {
                            axios.post('', {
                                "name":"changeUserRoleApi",
                                "param": {
                                    "role": 4,
                                    "user_id":userid
                                }
                            })
                            .then((response) => {
                                console.log(response.data.booth_status);
                                if(response.data.status == 200){
                                    alert("Congratulation!\nNew Gift Redemption Helper Successfully Added.");
                                    navigate("/admin/giftredeem");
                                }else{
                                    alert("Please provide valid input to add gift redemption helper");
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
                    alert("Please provide valid input to add gift redemption helper");
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
            <Header title={"Add Gift Redemption Helper"} button={"1"} path={"/admin/giftredeem"}/>
            <div className="add_bh_body">
                <div className="add_bh_type">
                    <p>Type: <b>Gift Redemption</b></p>
                </div>
                <div className="add_bh_content">
                    <form onSubmit={handleSubmit}>
                        <div className="add_bh_form">
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

export default AddGiftRedeemHelper;