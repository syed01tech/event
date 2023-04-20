import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import { Box, Button } from '@mui/material';
import { DataGrid, GridToolbar, GridToolbarContainer, GridColDef, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import './UserGroup.css';
import { useNavigate } from "react-router-dom";

const UserGroup = () => {
    const [username, setUserName] = useState();
    const [rows, setRows] = useState([]);
    const navigate = useNavigate();

    const deleteButton = (e, row) => {
        e.stopPropagation(); // don't select this row after clicking
        
        return alert(row.group_name);
    };

    const columns: GridColDef[] = [
        {
            field: 'group_name',
            headerName: 'Name',
            width: 180,
        },
        {
            field: 'group_description',
            headerName: 'Description',
            width: 180,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            renderCell: ( params ) => {
      
              return [
                <GridActionsCellItem
                    key="edit"
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={event =>  {navigate('/admin/usergroup/edit', {state:{group_id: params.row.group_id , group_name: params.row.group_name, group_description: params.row.group_description}})}}
                    color="inherit"
                />,
                <GridActionsCellItem
                    key="delete"
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={handleDelete(params.row.group_id, params.row.group_name)}
                    color="inherit"
                />,
              ];
            },
        }
    ];

    const handleDelete = (group_id, group_name) => () => {
        console.log(group_id + " " + group_name);
        try
        {
            axios.post('', {
                "name":"adminDeleteGroupApi",
                "headers": {
                'Authorization': 'Bearer ' + TokenService.getToken()
                },
                "param": {
                    "group_id":group_id,
                }
            })
            .then((response) => {
                console.log(response.data.message);
                if(response.data.status == 200){
                    alert( group_name + " delete Successfully.");
                    //navigate("/admin/usergroup");
                }else{
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                alert(error);
                console.log(error);
            });
            }
            catch (error)
            {
            alert(error);
        }
    };

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
              name: 'adminGetGroupApi',
              headers: {
                'Authorization': 'Bearer ' + TokenService.getToken()
              },
            }
        })
        .then((response) => {
            //console.log(JSON.stringify(response.data.user_list));
            setRows(response.data.groups);
        });
    })

    return(
        <div className="ug_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="ug_body">
                <div className="ug_add_button">
                    <button className="add_gp_button"  onClick={event =>  {navigate('/admin/usergroup/add')}}>Add</button>
                </div>
                <div className="ug_content">
                    <div className="ug_title">
                        <p>User Group</p>
                    </div>
                    <div className="ug_list">
                        <Box sx={{ height: 405, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row: any) => row.group_id} 
                                initialState={{
                                pagination: {
                                    paginationModel: {
                                    pageSize: 5,
                                    },
                                },
                                }}
                                pageSizeOptions={[5]}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserGroup;