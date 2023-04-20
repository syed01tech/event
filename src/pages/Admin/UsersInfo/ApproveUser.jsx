import React, { useState } from "react";
import axios from "../../../axios";
import Header from "../../../Layout/Header/Header";
import TokenService from "../../../TokenService";
import './UsersInfo.css';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar, GridToolbarContainer, GridColDef, GridRowModes, GridActionsCellItem } from '@mui/x-data-grid';
import AddTaskIcon from '@mui/icons-material/AddTask';

  const ApproveUser = () => {
  const [username, setUserName] = useState();
  const navigate = useNavigate();
  const [rows, setRows] = useState([]);

  const columns: GridColDef[] = [
    { field: 'user_id', headerName: 'ID', width: 50 },
    {
      field: 'user_name',
      headerName: 'Name',
      width: 200,
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Approve',
      width: 100,
      cellClassName: 'actions',
      renderCell: ( params ) => {

        return [
          <GridActionsCellItem
              key="Approve"
              icon={<AddTaskIcon />}
              label="Approve"
              onClick={handleApprove(params.row.user_id, params.row.user_name)}
              color="inherit"
          />,
        ];
      },
    }

  ];
  
  const handleApprove = (id, name) => () => {
    try
    {
        axios.post('', {
            "name":"adminApproveUserApi",
            "headers": {
            'Authorization': 'Bearer ' + TokenService.getToken()
            },
            "param": {
                "user_id":id,
            }
        })
        .then((response) => {
            if(response.data.status == 200){
                alert("User " + name + " registration is approved.");
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
        name: 'getPendingUserApi',
        headers: {
          'Authorization': 'Bearer ' + TokenService.getToken()
        },
      }
  })
  .then((response) => {
      setRows(response.data.pending_user);
  });
  })

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => rows.find((row) => row.id === id));
    console.log(selectedRowsData);
  };
  const [selectedRows, setSelectedRows] = React.useState([]);

  return(
    <div className="user_wrapper">
      <Header title={" Pending User"} button={"1"} path={"/admin/usersinfo"}/>
        <div className="user_body">
          <p></p>
          <div className="user_content">
            <div className="user_title">
              <p>Pending Users Info List</p>
            </div>
            <div className="user_list">
              <Box sx={{ height: 405, width: '100%' }}>
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
                    // onRowSelectionModelChange={ids => console.log(ids)}
                    onSelectionModelChange={(ids) => {
                      const selectedIDs = new Set(ids);
                      const selectedRows = rows.filter((row) =>
                        selectedIDs.has(row.user_id),
                      );
                      console.log(selectedRows);
                      // setSelectedRows(selectedRows);
                    }}
                    
                    // onSelectionModelChange={(ids) => {
                    // const selectedIDs = new Set(ids);
                    // const selectedRows = rows.filter((row) =>
                    //   selectedIDs.has(row.user_id)
                    // );
                    // console.log(selectedRows);
                    // setSelectedRows(selectedRows);
                    // }}
                    // {...rows}
                    disableRowSelectionOnClick
                    // onSelectionModelChange={(ids) => {
                    //   const selectedIDs = new Set(ids);
                    //   const selectedRows = rows.filter((id) =>
                    //     selectedIDs.has(rows.id.toString),
                    //   );
                    //   console.log(selectedRows);
                    // }}
                    slots={{ toolbar: GridToolbar }}
                    
                    onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
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

export default ApproveUser;