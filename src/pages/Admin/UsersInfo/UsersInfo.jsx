import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import './UsersInfo.css';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer, GridColDef, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const UsersInfo = () => {
  const [username, setUserName] = useState();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const columns: GridColDef[] = [
    { field: 'user_id', headerName: 'ID', width: 50 },
    {
      field: 'email',
      headerName: 'Email Address',
      type: 'email',
      width: 180,
    },
    {
      field: 'company_name',
      headerName: 'Company Name',
      width: 200,
    },
    {
      field: 'company_category',
      headerName: 'Company Category',
      width: 150,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
    },
    {
      field: 'contact',
      headerName: 'Contact',
      type: 'tel',
      width: 130,
    },
    {
      field: 'user_name',
      headerName: 'Name',
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
              onClick={event =>  {navigate('/admin/usersinfo/edit', {state:{user_id: params.row.user_id , email: params.row.email, company_name: params.row.company_name, company_category: params.row.company_category, title: params.row.title, contact: params.row.contact, user_name: params.row.user_name}})}}
              color="inherit"
          />,
          <GridActionsCellItem
              key="delete"
              icon={<DeleteIcon />}
              label="Delete"
              onClick={handleDelete(params.row.user_id, params.row.user_name)}
              color="inherit"
          />,
        ];
      },
    }
  ];

  const handleDelete = (id, name) => () => {
    console.log(id + " " + name);
    try
    {
        axios.post('', {
            "name":"adminDeleteUserApi",
            "headers": {
            'Authorization': 'Bearer ' + TokenService.getToken()
            },
            "param": {
                "user_id":id,
            }
        })
        .then((response) => {
            console.log(response.data.message);
            if(response.data.status == 200){
                alert("User " + name + " delete successfully.");
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
        name: 'getAllActivatedUserApi',
        headers: {
          'Authorization': 'Bearer ' + TokenService.getToken()
        },
      }
  })
  .then((response) => {
      //console.log(JSON.stringify(response.data.user_list));
      setRows(response.data.user_list);
  });
  })

  return(
    <div className="user_wrapper">
      <Header title={"Hello, " + username}/>
        <div className="user_body">
          <div className="user_button">
          <button className="add_user_button" onClick={event =>  {navigate('/admin/usersinfo/approveuser')}}>Get Pending User</button>
            <button className="add_user_button">Send Email to General Users</button>
            <button className="add_user_button">Import Excel CSV</button>
            {/* <button className="add_user_button">Export</button> */}
            <button className="add_user_button" onClick={event =>  {navigate('/admin/usersinfo/add')}}>Add</button>
          </div>
          <div className="user_content">
            <div className="user_title">
              <p>All General Users Info List</p>
            </div>
            <div className="user_list">
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
                    checkboxSelection
                    disableRowSelectionOnClick
                    slots={{ toolbar: GridToolbar }}
                  />
              </Box>
            </div>
          </div>
          {/* <div className="user_radio">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Please choose the following:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="event_information"
                  name="radio-buttons-group"
                >
                <FormControlLabel value="event_information" control={<Radio />} label="Event Information" /> 
                <FormControlLabel value="event_notice" control={<Radio />} label="Event Notice" />
                <FormControlLabel value="confirmation_email" control={<Radio />} label="Confirmation Email" />
              </RadioGroup>
            </FormControl>
          </div> */}
        </div>
      </div>
    );
};

export default UsersInfo;