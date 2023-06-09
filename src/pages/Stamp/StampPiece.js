import React, { useState } from 'react';
import stamp1 from "../../assets/stamp_unchecked.png";
import stamp2 from "../../assets/stamp_checked.png";
import stamp3 from "../../assets/stamp.png";

import axios from '../../axios';
import TokenService from '../../TokenService.js';

export const StampPiece = (props) => {
    const { stamp_id, stamp_qr, isActivated} = props.data;

    const [image, setImage] = useState();

    React.useEffect(()=>{
        var boolean = (TokenService.getStamp()).includes(stamp_id);

        if(boolean == true){
            setImage(stamp2);
        } else {
            setImage(stamp1);
        }  
    })

    return (
        <div className="stamp">
            <img className="stamp_image" src={stamp3} />
            <img className="stamp_check" src={image} />
        </div>
    );
};