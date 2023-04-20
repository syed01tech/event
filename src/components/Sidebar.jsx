import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import './Sidebar.css';
import TokenService from "../TokenService";

const Sidebar = ({children}) => {    
    const navigate = useNavigate();
    const location = useLocation();
    const role = TokenService.getRole();

    //handle logout
    function handleLogout(name, path){
        console.log(name);
        if (name == "Logout"){
            console.log("Logout: "+name);
            sessionStorage.clear();
            navigate(path);
        }
    }

    const menuItem=[
        {
            path:"/admin/dashboard",
            name:"Dashboard",
        },
        {
            path:"/admin/scan",
            name:"Scan QR Code (Entry)",
        },
        {
            path:"/admin/usergroup",
            name:"User Group",
        },
        {
            path:"/admin/usersinfo",
            name:"General Users Info List",
        },
        {
            path:"/admin/boothhelper",
            name:"Booth Helpers Info List",
        },
        {
            path:"/admin/giftredeem",
            name:"Gift Redeemption Helpers Info List",
        },
        {
            path:"/",
            name:"Logout",
        },
    ]

    const boothhelpers_menuItem=[
        {
            path:"/boothhelper/userlist",
            name:"General Users Info List",
        },
        {
            path:"/boothhelper/scan",
            name:"Scan QR Code (Booth check-in)",
        },
        {
            path:"/",
            name:"Logout",
        }
    ]

    const giftredeemhelper_menuItem=[
        {
            path:"/giftredeemhelper/scan",
            name:"Scan QR Code (Redeem Coupon)",
        },
        {
            path:"/",
            name:"Logout",
        }
    ]

    const user_menuItem=[
        {
            path:"/home/qrcode",
            name:"Your QR Code",
        },
        {
            path:"/home/map",
            name:"Booth Map",
        },
        {
            path:"/home/redemption_list",
            name:"Redemption List",
        },
        {
            path:"/user",
            name:"Logout",
        }
    ]

    return(
        <div className="container">
            {
                location.pathname !== "/login" && location.pathname !== "/login/" && location.pathname !== "/" &&  location.pathname !== "/admin/login" && location.pathname !== "/register" && location.pathname !== "/register/complete" && location.pathname !== "/user/login" && location.pathname !== "/user" && location.pathname !== "/user/" &&                
                <div className="sidebar">
                    {
                        <div className="top_section">
                        {
                            //check if user is general user
                            role == "0" &&
                            <p className="logo">General Users Module</p>
                        }
                        {
                            //check if user is general user
                            role == "1" &&
                            <p className="logo">General Users Module</p>
                        }
                        {
                            //check if user is booth heper
                            role === "2" &&
                            <p className="logo">Booth Helpers Module</p>
                        }
                        {
                            //check if user is admin
                            role === "3" &&
                            <p className="logo">Admin/Event Organizers Module</p>
                        }
                        {
                            //check if user is gift redemption helper
                            role === "4" &&
                            <p className="logo">Gift Redemption Helpers Module</p>
                        }
                        </div>
                    }
                    {
                        //check if user is general user
                        role == "0" &&
                        user_menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    {
                        //check if user is general user
                        role == "1" &&
                        user_menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    {
                        //check if user is booth helper
                        role == "2" &&
                        boothhelpers_menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    {
                        //check if user is admin
                        role == "3" &&
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                    {
                        //check if user is gift redemption helper
                        role == "4" &&
                        giftredeemhelper_menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>
            }
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;