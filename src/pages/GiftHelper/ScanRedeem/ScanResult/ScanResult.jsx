import React, { useState } from "react";
import axios from "../../../../axios";
import Header from "../../../../Layout/Header/Header";
import TokenService from "../../../../TokenService";
import scanned from "../../../../assets/scan_completed.png";

import './ScanResult.css';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
      field: 'entry',
      headerName: 'Entry',
      width: 70,
      editable: true,
    },
    {
      field: 'entryTime',
      headerName: 'Entry Time',
      width: 90,
      editable: true,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 180,
      editable: true,
    },
    {
      field: 'companyName',
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
      field: 'companyCategory',
      headerName: 'Company Category',
      width: 150,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 1, entry:'Y', entryTime:'16:03', name: 'Jon Snow', companyName:'Company Sample Limited', contact:'+852 23456789', title:'Marketing Executive', email:'sample123@gmail.com', companyCategory:'Category' },
  ];

const UsersInfo = () => {
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
        <div className="grh_scanresult_wrapper">
            <Header title={"Scan QR Code"} button={"1"} path={"/admin/scan"}/>
            <div className="grh_scanresult_body">
                <div className="grh_scanresult_top">
                  <div className="grh_scanresult_image">
                    <img src={scanned} />
                  </div>
                  <p className="grh_scanresult_completed">Scan Completed!</p>
                  <p className="grh_scanresult_type">Type: Redeem Coupon</p>
                </div>
                <div className="grh_scanresult_content">
                    <div className="grh_scanresult_title">
                        <p>User Info Updated</p>
                    </div>
                    <div className="grh_scanresult_list">
                        <Box sx={{ height: 163, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
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