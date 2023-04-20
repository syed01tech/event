import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import scanned from "../../../assets/scan_completed.png";
import { useLocation } from 'react-router-dom';

import './ScanResult.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
      field: 'user_name',
      headerName: 'Name',
      width: 180,
      editable: true,
    },
    {
      field: 'company_name',
      headerName: 'Company Name',
      width: 200,
      editable: true,
    },
    {
      field: 'contact',
      headerName: 'Contact',
      type: 'tel',
      width: 130,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      type: 'email',
      width: 180,
      editable: true,
    },
    {
      field: 'company_category',
      headerName: 'Company Category',
      width: 150,
      editable: true,
    },
  ];

const UsersInfo = () => {
    const [username, setUserName] = useState();
    const [company_name, setCompanyName] = useState();
    const [contact, setContact] = useState();
    const [title, setTitle] = useState();
    const [email, setEmail] = useState();
    const [company_category, setCompanyCat] = useState();

    const location = useLocation();
    //const [rows, setRows] = useState([]);

    const rows = [
      { user_id: location.state.user_id, user_name: username, company_name:company_name, contact: contact, title:title, email:email, company_category:company_category },
    ];

    React.useEffect(() => {
      axios.get('get/', {
          params: {
            name: 'adminGetUserInfoApi',
            user_id: location.state.user_id,
          }
      })
      .then((response) => {
        setUserName(response.data.user_info.user_name);
        setCompanyName(response.data.user_info.company_name);
        setContact(response.data.user_info.contact);
        setTitle(response.data.user_info.title);
        setEmail(response.data.user_info.email);
        setCompanyCat(response.data.user_info.company_category);
      });
    })

    return(
        <div className="scanresult_wrapper">
            <Header title={"Scan QR Code"} button={"1"} path={"/admin/scan"}/>
            <div className="scanresult_body">
                <div className="scanresult_top">
                  <div className="scanresult_image">
                    <img src={scanned} />
                  </div>
                  <p className="scanresult_completed">Scan Completed!</p>
                  <p className="scanresult_type">Type: Entry</p>
                </div>
                <div className="scanresult_content">
                    <div className="scanresult_title">
                        <p>User Info Updated</p>
                    </div>
                    <div className="scanresult_list">
                        <Box sx={{ height: 163, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row: any) => row.user_id} 
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                                }}
                                pageSizeOptions={[2]}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersInfo;