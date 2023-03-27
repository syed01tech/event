import React from "react";

export const StampPiece = (props) => {
    const { id, stampName, stampImage } = props.data;
    return (
        <div className="stamp">
            <img src={stampImage} />
        </div>
    );
};