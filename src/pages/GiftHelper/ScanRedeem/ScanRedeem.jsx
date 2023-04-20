import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";

import './ScanRedeem.css';
import Scanner from './ScannerRedeem.js';

const ScanRedeem = () => {
    return(
        <div className="scan_redeem_wrap">
            <Header title={"Scan QR Code"} button={"1"} path={"/boothhelper/userlist"}/>
            <div className="scan_redeem_body">
                <div className="scan_redeem_title_wrapper">
                    <p className="scan_redeem_title">Put QR code inside the square to do scanning.</p>
                </div>
                <Scanner/>
            </div>
        </div>
    );
};

export default ScanRedeem;