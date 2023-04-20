import React, { useState } from "react";
import { TextField } from '@mui/material';
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import { useNavigate, useLocation } from 'react-router-dom';

import './AddGiftRedeemHelper.css';

const EditGiftRedeemHelper = () => {

    const location = useLocation();
    const initialUID = location.state.user_id;
    const initialBID = location.state.booth_id;
    const [userid, setUserId] = useState(initialUID);
    const [boothid, setBoothId] = useState(initialBID);
    const [newboothid, setNewBoothId] = useState();

    let navigate = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try
        {
            axios.post('', {
                "name":"adminDeleteGiftRedemptionHelper",
                "param": {
                    "booth_id":boothid,
                    "user_id":userid
                }
            })
            .then((response) => {
                console.log(response.data.booth_status);
                if(response.data.status == 200){
                }else{
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });

            axios.post('', {
                "name":"adminAddGiftRedemptionHelperApi",
                "param": {
                    "booth_id":newboothid,
                    "user_id":userid
                }
            })
            .then((response) => {
                console.log(response.data.booth_status);
                if(response.data.status == 200){
                    // alert("Booth Helper Successfully Editted.");
                    navigate("/admin/giftredeem");
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
            <Header title={"Edit Gift Redemption Helper"} button={"1"} path={"/admin/giftredeem"}/>
            <div className="add_bh_body">
                <div className="add_bh_type">
                    <p>Type: <b>Gift Redemption Helpers</b></p>
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
                                        value={userid}
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
                                        placeholder={('Old Booth ID')}
                                        variant="standard"
                                        type="number"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setBoothId(e.target.value)}
                                        value={boothid}
                                    />
                                </div>
                            </label>
                            <label>
                                <div className='add_bh_form_block'>
                                    <TextField
                                        id="new_booth_id"
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
                                        placeholder={('New Booth ID')}
                                        variant="standard"
                                        type="number"
                                        color="warning"
                                        focused
                                        fullwidth="true"
                                        onChange={e => setNewBoothId(e.target.value)}
                                    />
                                </div>
                            </label>
                        </div>
                        <div className='add_bh_bottom'>
                            <button type="submit" className="add_add_bh_button">{('Save')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditGiftRedeemHelper;