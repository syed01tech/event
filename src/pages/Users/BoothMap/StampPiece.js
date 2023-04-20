import React, { useState } from 'react';
import stamp1 from "../../../assets/stamp_unchecked.png";
import stamp2 from "../../../assets/stamp_checked.png";
import stamp3 from "../../../assets/stamp.png";

import TokenService from '../../../TokenService.js';

export const StampPiece = (props) => {
    const { booth_id, booth_name, isActivated} = props.data ?? {};

    const [image, setImage] = useState();

    React.useEffect(()=>{
        var boolean = (TokenService.getStamp()).includes(booth_id);

        if(boolean === true){
            setImage(stamp2);
        } else {
            setImage(stamp1);
        }  
    }, [booth_id])

    return (
        <div className="bm_stamp">
            <img className="bm_stamp_image" src={stamp3} alt="Stamp Background Image"/>
            <img className="bm_stamp_check" src={image} alt="Stamp Check Image"/>
        </div>
    );
};