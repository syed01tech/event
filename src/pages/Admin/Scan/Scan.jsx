import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";

import './Scan.css';
import Scanner from './Scanner.js';

const Scan = () => {
    return(
        <div className="scan_wrap">
            <Header title={"Scan QR Code"} button={"1"} path={"/admin/usersinfo"}/>
            <div className="scan_body">
                <div className="scan_title_wrapper">
                    <p className="scan_title">Put QR code inside the square to do scanning.</p>
                </div>
                <Scanner/>
            </div>
        </div>
    );
};

export default Scan;