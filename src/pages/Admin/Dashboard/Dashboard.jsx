import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";

import './Dashboard.css';

const Dashboard = () => {
    const [username, setUserName] = useState();

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
        });
    }, [])
    
    return(
        <div className="dashboard_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="dashboard_inside">
                <div className="dashboard_body">
                    <div className="title_wrapper">
                        <p className="dashboard_title">Attending Numbers</p>
                    </div>
                    <div className="attend_wrapper">
                        <p className="attend_number">25</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;