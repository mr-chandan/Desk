import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Tables.css'
import Button from '@mui/material/Button';
import { searchtwo } from '../../../https/request';
import { setolddata, setstepone } from '../../../store/TableSlice'

const Steptwotables = (props) => {
  const [rowData, setrowdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      try {
        console.log(props.search)
        const { data } = await searchtwo(props.search)
        setrowdata(data)
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchdata()
  }, [props.value]);

  const SimpleComp = (p) => {
    // const tbname = storedata.name
    // const pdata = p.data.id
    const handleupdate = () => {
      // dispatch(setolddata(p.data))
      // props.setUpdate(true)
      // props.setformData(p.data)
      // props.open()
    }
    const handledelete = () => {
      // const check = window.confirm("Are u sure of deleting the records")
      // async function adds() {
      //   try {
      //     const res = await delsteptwo({ pdata, tbname })
      //     if (res.status == "200") {
      //       console.log("sucess")
      //     } else {
      //       console.log("error")
      //     }
      //   } catch (err) {
      //     console.log(err);
      //   }
      // }
      // if (check) {
      //   adds()
      //   props.handleClick()
      // }
    }
    return <><Button variant="contained" onClick={handleupdate} className='space' >Update</Button>
      <Button variant="contained" color="error" onClick={handledelete}>Delete</Button>
    </>
  }
  const GetDetails = (p) => {
    const click = () => {
      // dispatch(setstepone(p.data))
      // props.onpress()
    }
    return <Button variant="contained" onClick={click} className='space' >Details</Button>

  }
  const Updatecell = (p) => {
    const handleupdate = () => {
      props.setUpdate(true)
      props.setformData(p.data)
      props.open()
    }
    return <Button variant="contained" onClick={handleupdate} className='space'>Update</Button>
  }
  const check = () => {
    if (props.check === "language") {
      return { field: 'Languages', filter: true, sortable: true }
    }
    else if (props.check === "subject") {
      return { field: 'Subject', filter: true, sortable: true }
    }
    else{
      return  "{field: 'name', filter: true, sortable: true }, { field: 'section', filter: true, sortable: true }, { field: 'email', filter: true, sortable: true }, { field: 'password', filter: true, sortable: true }, { field: 'language', filter: true, sortable: true }"
    }
  }
  const [columnDefs] = useState(
    [
      {
        field: 'id',
        filter: true,
        sortable: true,
        sort: 'asc',
        minWidth: 100
      },
      check(),
      {
        headerName: "Update",
        field: 'Update',
        cellRenderer: Updatecell,
        minWidth: 200
      },
      {
        headerName: "Edit",
        field: 'Name',
        cellRenderer: SimpleComp,
        minWidth: 200
      },
      {
        headerName: "GetDetails",
        field: 'id',
        cellRenderer: GetDetails,
      }
    ]);
  return (
    <div className="tablewrap" style={props.sectable}>
      <div className="ag-theme-alpine" style={{ width: '100%', height: '100%' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple"
          suppressClickEdit="true"
          suppressRowClickSelection={true}
          defaultColDef={{ flex: 1, minWidth: 200 }} />
      </div>
    </div>

  );
}

export default Steptwotables