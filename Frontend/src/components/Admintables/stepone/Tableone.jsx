import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "../stepzero/Tables.css"
import Button from '@mui/material/Button';
import { searchone, delsteptwo } from '../../../https/request';
import { useDispatch, useSelector } from 'react-redux'
import { setolddata, setstepone } from '../../../store/TableSlice'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import UpdateIcon from '@mui/icons-material/Update';

const Tables = (props) => {
  const [rowData, setrowdata] = useState([]);
  const dispatch = useDispatch()
  const storedata = useSelector((state) => state.TableSlice.stepone)
  useEffect(() => {
    async function fetchdata() {
      try {
        const { data } = await searchone(storedata)
        setrowdata(data)
        console.log(data)
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchdata()
  }, [props.value]);

  const SimpleComp = (p) => {
    const tbname = storedata.courses
    const pdata = p.data
    const handledelete = () => {
      const check = window.confirm("Are u sure of deleting the records")
      async function adds() {
        try {
          const res = await delsteptwo({ pdata, tbname })
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
  const Updatecell = (p) => {
    const handleupdate = () => {
      props.setformData(p.data)
      dispatch(setolddata(p.data))
      props.setUpdate(true)
      props.open()
    }
    return <Button variant="contained" onClick={handleupdate} className='space' startIcon={<UpdateIcon />}>Update</Button>
  }
  const [columnDefs] = useState([
    {
      field: 'id',
      filter: true,
      sortable: true,
      sort: 'asc',
      minWidth: 100
    },
    { field: 'Sem_Name', filter: true, sortable: true },
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
























// const onSelectionChanged = (event) => {
  //   const select = event.api.getSelectedRows()
  //   select.forEach(element => {
  //     console.log(element.Name)
  //   });
  // }
