import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import './UserList.css';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer, GridColDef, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const columns: GridColDef[] = [
    {
      field: 'check_in_time',
      headerName: 'Entry Time',
      width: 180,
    },
    {
      field: 'user_name',
      headerName: 'Name',
      width: 180,
    },
    {
      field: 'company_name',
      headerName: 'Company Name',
      width: 200,
    },
    {
      field: 'contact',
      headerName: 'Contact',
      type: 'tel',
      width: 130,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      type: 'email',
      width: 180,
    },
    {
      field: 'company_category',
      headerName: 'Company Category',
      width: 150,
    },
  ];
  
const UserList = () => {
    const [username, setUserName] = useState();
    const [booth, setBoothID] = useState();
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);

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

    React.useEffect(() => {
      axios.get('get/', {
        params: {
          name: 'getBoothHelperBoothApi',
          headers: {
            'Authorization': 'Bearer ' + TokenService.getToken()
          },
        }
      })
      .then((response) => {
          setBoothID(response.data.booth.booth_id);
          
          axios.get('get/', {
            params: {
              name: 'getBoothCheckedInUserApi',
              booth_id: response.data.booth.booth_id,
              headers: {
                'Authorization': 'Bearer ' + TokenService.getToken()
              },
            }
          })
          .then((response) => {
              //console.log(JSON.stringify(response.data.user_list));
              setRows(response.data.checked_in_users);
          });
      });
    })

    return(
        <div className="userlist_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="userlist_body">
                <div className="userlist_content">
                    <div className="userlist_title">
                        <p>General Users Info List</p>
                    </div>
                    <div className="booth_area_wrapper">
                        <p className="booth_are_text">Area: Booth 1</p>
                    </div>
                    <div className="userlist_list">
                        <Box sx={{ height: 500, width: '100%' }}>
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
                                pageSizeOptions={[5]}
                                disableRowSelectionOnClick
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserList;