import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";

import './ScanCheckIn.css';
import Scanner from './ScannerCheckIn.js';

const ScanCheckIn = () => {
    return(
        <div className="scan_checkin_wrap">
            <Header title={"Scan QR Code"} button={"1"} path={"/boothhelper/userlist"}/>
            <div className="scan_checkin_body">
                <div className="scan_checkin_title_wrapper">
                    <p className="scan_checkin_title">Put QR code inside the square to do scanning.</p>
                </div>
                <Scanner/>
            </div>
        </div>
    );
};

export default ScanCheckIn;