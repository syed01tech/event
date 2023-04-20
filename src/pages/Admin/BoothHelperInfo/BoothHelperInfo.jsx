import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer, GridColDef, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { useNavigate } from "react-router-dom";
import './BoothHelperInfo.css';

const BoothHelperInfo = () => {
    const [username, setUserName] = useState();
    const navigate = useNavigate();
    const [rows, setRows] = useState([]);

    const deleteButton = (e, row) => {
      e.stopPropagation(); // don't select this row after clicking
      
      return alert(row.group_name);
  };

    const columns: GridColDef[] = [
      {
          field: 'user_name',
          headerName: 'Name',
          width: 180,
        },
      { field: 'booth_id', headerName: 'Booth ID', width: 100 },
      {
          field: 'actions',
          type: 'actions',
          headerName: 'Actions',
          width: 110,
          cellClassName: 'actions',
          renderCell: ( params ) => {
    
            return [
              <GridActionsCellItem
              key="edit"
                icon={<EditIcon />}
                label="Edit"
                className="textPrimary"
                onClick={event =>  {navigate('/admin/boothhelper/edit', {state:{booth_id: params.row.booth_id , user_id: params.row.user_id}})}}
                color="inherit"
              />,
              <GridActionsCellItem
                key="delete"
                icon={<DeleteIcon />}
                label="Delete"
                onClick={handleDeleteClick(params.row.user_id, params.row.booth_id)}
                color="inherit"
              />,
            ];
          },
        }
    ];

    const handleDeleteClick = (user_id, booth_id) => () => {

      try
        {
          axios.post('', {
            "name":"adminDeleteBoothHelperApi",
            "headers": {
              'Authorization': 'Bearer ' + TokenService.getToken()
              },
            "param": {
                "booth_id":booth_id,
                "user_id":user_id
            }
        })
        .then((response) => {
            if(response.data.status == 200){
              try
                        {
                            axios.post('', {
                                "name":"changeUserRoleApi",
                                "param": {
                                    "role": 1,
                                    "user_id":user_id
                                }
                            })
                            .then((response) => {
                                if(response.data.status == 200){
                                    alert( "Deleted Successfully." );
                                }else{
                                    alert("Please provide valid input to add booth helper");
                                }
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                            }
                            catch (error)
                            {
                            alert(error);
                        }
            }else{
                alert(response.data.message);
            }
        })
        .catch((error) => {
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
            name: 'adminGetBoothHelperApi',
            headers: {
              'Authorization': 'Bearer ' + TokenService.getToken()
            },
          }
      })
      .then((response) => {
          setRows(response.data.booth_helpers);
      });

  })

    return(
        <div className="bh_wrapper">
            <Header title={"Hello, " + username}/>
            <div className="bh_body">
                <div className="bh_add_button">
                    <button className="add_bh_button" onClick={event =>  {navigate('/admin/boothhelper/add')}}>Add</button>
                </div>
                <div className="bh_content">
                    <div className="bh_title">
                        <p>Booth Helpers Info List</p>
                    </div>
                    <div className="bh_list">
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
                                pageSizeOptions={[5, 10, 25, 50, 100]}
                                disableRowSelectionOnClick
                                slots={{ toolbar: GridToolbar }}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BoothHelperInfo;