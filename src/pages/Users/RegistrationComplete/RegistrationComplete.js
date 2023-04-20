import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import banner from '../../../assets/event_banner.png';
import back_button from '../../../assets/back_login_button.png';

import './RegistrationComplete.css';

import axios from "../../../axios.js";
import TokenService from '../../../TokenService';

export default function RegistrationComplete (props){
    let navigate = useNavigate();

    function handleNavigate(){
        navigate("/user");
    }
    
    return(
        <div className="registercomplete_wrapper">
            <div className='registercomplete_banner'>
                <img className='image' src={banner}></img>
            </div>
            <div className='registercomplete_header'>
                <div className='registercomplete_back_button'>
                    <img className='image' src={back_button} onClick={handleNavigate}></img>
                </div>
                <div className='registercomplete_title'>
                    <p>Registration</p>
                </div>
            </div>
            <div className='registercomplete_content'>
                <div className='registercomplete_form'>
                    <div className='registercomplete_form_block'>
                        <p>Registration completed. Login QR code is sent to your email.</p>
                    </div>
                    <div className='eventInfo'>
                        <div className='registercomplete_form_event_title'>
                            <p>Event Info</p>
                        </div>
                        <div className='registercomplete_form_event_block'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}