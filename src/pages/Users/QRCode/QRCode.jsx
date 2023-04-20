import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
//import qrcode from "../../../assets/qr_code.png";
import qr from 'qrcode';

import './QRCode.css';

 const QRCode = () => {
    const [username, setUserName] = useState();
    const [qrvalue, setQrValue] = useState('');
    const [qrcode, setQrCode] = useState('');

    React.useEffect(() => {
        axios.get('get/', {
            params: {
              name: 'userInfo',
              headers: {
                'Authorization': 'Bearer ' + TokenService.getToken()
              },
            }
        })
        .then((response) => {
            setUserName(response.data.user_info.user_name);
            setQrValue(response.data.user_info.user_id);
        });
    },[])

    React.useEffect(() => {
        GenerateQRCode();
    })

    const GenerateQRCode = () => {
        qr.toDataURL(qrvalue,{
            width:330,
        }, (err, qrvalue) => {
            if(err){
                return console.error(err);
            }

            console.log(qrvalue);
            setQrCode(qrvalue);
        })
    }

    return(
        <div className="qrcode_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="qrcode_body">
                <div className="qrcode_all_wrapper">
                    <div className="qrcode_title_wrapper">
                        <p className="qrcode_title">Your QR code</p>
                    </div>
                    <div className="qrcode_content">
                        <p>Please present it to the staff:</p>
                        <p>1. At entry.</p>
                        <p>2. When attending exhibition booth.</p>
                        <p>3. For redeem coupon.</p>
                    </div>
                    <div className="qr_wrapper">
                        <img className="qrcode_image" src={qrcode}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRCode;
