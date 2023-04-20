import React, { Component, useRef, useState } from "react";
import TokenService from "../../TokenService";

import back_button from '../../assets/back_login_button.png';
import {withRouter} from '../../App/withRouter.js';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <div className="header_wrapper">
                {
                    this.props.button == "1" &&
                    <div className="back_button_wrapper">
                        <img className='image' src={back_button} onClick={event =>  {this.props.navigate(this.props.path)}}></img>
                    </div>
                }
                <div className="header_title">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);