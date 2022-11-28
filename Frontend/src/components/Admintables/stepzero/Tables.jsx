import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./Tables.css"
import Button from '@mui/material/Button';
import { search, del } from '../../../https/request';
import { useDispatch } from 'react-redux'
import { setstepone } from '../../../store/TableSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

const Tables = (props) => {
  const [rowData, setrowdata] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchdata() {
      try {
        const { data } = await search({ "dbname": "courses" })
        setrowdata(data)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchdata()
  }, [props.value]);

  const SimpleComp = (p) => {
    const handledelete = () => {
      const check = window.confirm("Are u sure of deleting the records")
      async function adds() {
        try {
          const res = await del(p.data)
          if (res.status == "200") {
            console.log("sucess")
          } else {
            console.log("error")
          }
        } catch (err) {
          console.log(err);
        }
      }
      if (check) {
        adds()
        props.handleClick()
      }
    }
    return <Button variant="contained" color="error" onClick={handledelete} startIcon={<DeleteIcon />}> Delete </Button>
  }
  const GetDetails = (p) => {
    const click = () => {
      dispatch(setstepone(p.data))
      props.onpress()
    }
    return <Button variant="contained" onClick={click} className='space' startIcon={<InfoIcon />}>Details</Button>

  }
  const [columnDefs] = useState([
    {
      field: 'id',
      filter: true,
      sortable: true,
      sort: 'asc'
    },
    { field: 'courses', filter: true, sortable: true },
    {
      headerName: "Edit",
      field: 'Name',
      cellRenderer: SimpleComp,
      minWidth: 300
    },
    {
      headerName: "GetDetails",
      field: 'id',
      cellRenderer: GetDetails,
    }
  ]);
  return (
    <div className="wrap">
      <div className="ag-theme-alpine" style={{ maxWidth: "100%", boxSizing: "border-box" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple"
          suppressClickEdit="true"
          suppressRowClickSelection={true}
          domLayout={'autoHeight'}
          defaultColDef={{ flex: 1, minWidth: 200 }} />
      </div>
    </div>

  );
}

export default Tables