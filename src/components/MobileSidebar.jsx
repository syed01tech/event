import React, { useState } from "react";
import { FaBars } from "react-icons/fa"
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import './MobileSidebar.css';
import TokenService from "../TokenService";

const MobileSidebar = ({children}) => {    
    const [isOpen, setIsOpen] = useState();
    const toggle = () => setIsOpen(!isOpen);
    const retoggle = () => setIsOpen(isOpen);
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

    const style = {
        width: isOpen ? "190px" : "48px",
        height: isOpen ? "155vh" : "48px",
        minHeight: isOpen ? "700px" : "48px",
        marginTop: isOpen ? "0px" : "26px",
        borderRadius: isOpen ? "0px" : "0px 8px 8px 0px",
    };

    const topSectionStyle = {
        padding: isOpen ? "0px 15px" : "10px",
    }

    return(
        <div className="mobile_container">
            {
                location.pathname !== "/login" && location.pathname !== "/login/" && location.pathname !== "/" &&  location.pathname !== "/admin/login" && location.pathname !== "/register" && location.pathname !== "/register/complete" && location.pathname !== "/user/login" && location.pathname !== "/user" && location.pathname !== "/user/" &&                
                <div style={style} className="mobile_sidebar">
                {
                        <div className="mobile_top_section" style={topSectionStyle}>
                        {
                            //check if user is general user
                            role == "0" &&
                            <p style={{display: isOpen ? "block" : "none"}} className="mobile_logo">General Users Module</p>
                        }
                        {
                            //check if user is general user
                            role == "1" &&
                            <p style={{display: isOpen ? "block" : "none"}} className="mobile_logo">General Users Module</p>
                        }
                        {
                            //check if user is booth heper
                            role === "2" &&
                            <p style={{display: isOpen ? "block" : "none"}} className="logo">Booth Helpers Module</p>
                        }
                        {
                            //check if user is admin
                            role == "3" &&
                            <p style={{display: isOpen ? "block" : "none"}} className="mobile_logo">Admin/Event Organizers Module</p>
                        }
                        {
                            //check if user is gift redemption helper
                            role === "4" &&
                            <p style={{display: isOpen ? "block" : "none"}} className="logo">Gift Redemption Helpers Module</p>
                        }
                        <div style={{marginLeft: isOpen ? "50px" : "0px", display: isOpen ? "none" : "block"}} className="mobile_bars">
                            <FaBars onClick={toggle}/>
                        </div>
                        </div>
                }
                {
                    //check if user is general user
                    role == "0" &&
                    user_menuItem.map((item, index)=>(
                        <NavLink style={{display: isOpen ? "block" : "none"}} to={item.path} key={index} className="mobile_link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                            <div style={{display: isOpen ? "block" : "none"}} className="mobile_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                {
                    //check if user is general user
                    role == "1" &&
                    user_menuItem.map((item, index)=>(
                        <NavLink style={{display: isOpen ? "block" : "none"}} to={item.path} key={index} className="mobile_link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                            <div style={{display: isOpen ? "block" : "none"}} className="mobile_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                {
                    //check if user is booth helper
                    role == "2" &&
                    boothhelpers_menuItem.map((item, index)=>(
                        <NavLink style={{display: isOpen ? "block" : "none"}} to={item.path} key={index} className="mobile_link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                            <div style={{display: isOpen ? "block" : "none"}} className="mobile_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                {
                    //check if user is admin
                    role == "3" &&
                    menuItem.map((item, index)=>(
                        <NavLink style={{display: isOpen ? "block" : "none"}} to={item.path} key={index} className="mobile_link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                            <div style={{display: isOpen ? "block" : "none"}} className="mobile_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                {
                    //check if user is gift redemption helper
                    role == "4" &&
                    giftredeemhelper_menuItem.map((item, index)=>(
                        <NavLink style={{display: isOpen ? "block" : "none"}} to={item.path} key={index} className="mobile_link" activeclassname="active" onClick={() => handleLogout(item.name, item.path)}>
                            <div style={{display: isOpen ? "block" : "none"}} className="mobile_link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
            }
            <div className="fade" style={{display: isOpen ? "block" : "none"}} onClick={toggle}></div>
            <main className="mobile_main">{children}</main>
        </div>
    );
};

export default MobileSidebar;