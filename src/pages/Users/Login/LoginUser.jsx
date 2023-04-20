import React, { useState, useRef } from "react";
import axios from "../../../axios";
import back_button from '../../../assets/back_login_button.png';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';
import TokenService from '../../../TokenService.js';

import './LoginUser.css';
import Scanner from './LoginUserScanner.js';

const Scan = () => {
    const navigate = useNavigate();
    const [result, setResult] = useState("");
    const file = useRef(null);

    const importCode = (e) => {
        const file = e.target.files[0];
        if(!file){
            return;
        }

        QrScanner.scanImage(file, { returnDetailedScanResult: true})
            .then(result => loginQRCode(result.data))
            .catch(e => console.log(e));
    }

    const loginQRCode = (data) => {
        const currentTime = Date.now();

        console.log(data);
        try
        {
            axios.post('', {
            "name":"scanQRCodeGenerateToken",
            "param": {
                "qr_code":data
                }
            })
            .then((response) => {
                console.log(response);
                if(response.data.status == 200){
                    //window.location.replace("/home/");
                    TokenService.setToken(response.data.token);
                    TokenService.setRole(response.data.user_role);
                    TokenService.setLoginTime(currentTime);
                    console.log("Role:" + TokenService.getRole());
                    console.log(currentTime);
                    navigate("/home");
                }else{
                //alert((i18n.language == 'zh_hk')?"電話號碼或密碼輸入錯誤":"电话号码或密码输入错误");
                alert(response.data.message);
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

    return(
        <div className="login_user_wrap">
            <div className="login_header_wrapper">
                <div className="login_header_back_button_wrapper">
                    <img className='image' src={back_button} onClick={event =>  {navigate("/")}}></img>
                </div>
                <div className="login_header_title">
                    <p>{"Scan QR Code/Login"}</p>
                </div>
            </div>
            <div className="login_user_body">
                <div className="login_user_title_wrapper">
                    <p className="login_user_title">Put QR code inside the square to do scanning.</p>
                </div>
                <Scanner/>
            </div>
            <div className="login_user_bottom">
                <form>
                    <input ref={file} type="file" onChange={importCode} style={{ display: 'none' }}/>
                </form>
                <button className="import_qr_button" onClick={e => file.current && file.current.click()} >{('Import QR Code')}</button>
                <button className="register_user_button" onClick={event =>  {navigate("/register")}}>{('Register')}</button>
                <button className="login_admin_button" onClick={event =>  {navigate("/login")}}>{('Login As Admin')}</button>
            </div>
        </div>
    );
};

export default Scan;