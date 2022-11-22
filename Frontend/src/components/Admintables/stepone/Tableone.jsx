import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./Tableone.css"
import Button from '@mui/material/Button';
import { searchone, delsteptwo } from '../../../https/request';
import { useDispatch, useSelector } from 'react-redux'
import { setolddata, setstepone } from '../../../store/TableSlice'

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
    const tbname = storedata.name
    const pdata = p.data.id
    const handleupdate = () => {
      dispatch(setolddata(p.data))
      props.setUpdate(true)
      props.setformData(p.data)
      props.open()
    }
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
  const [columnDefs] = useState([
    {
      field: 'id',
      filter: true,
      sortable: true,
      sort: 'asc'
    },
    { field: 'SEM_Num', filter: true, sortable: true },
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
























// const onSelectionChanged = (event) => {
  //   const select = event.api.getSelectedRows()
  //   select.forEach(element => {
  //     console.log(element.Name)
  //   });
  // }
