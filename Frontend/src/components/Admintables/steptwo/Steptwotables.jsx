import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './Tables.css'
import Button from '@mui/material/Button';
import { searchtwo } from '../../../https/request';
import { delsteptwoone } from '../../../https/request'
import { useDispatch, useSelector } from 'react-redux'
import { setolddata } from '../../../store/TableSlice'

const Steptwotables = (props) => {
  const [rowData, setrowdata] = useState([]);
  const dispatch = useDispatch()
  const storedata = useSelector((state) => state.TableSlice.stepone)
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

  const Deletecell = (p) => {
    const handledelete = () => {
      if (props.data == "languagesbtn") {
        const check = window.confirm("Are u sure of deleting the records")
        const pdata = p.data
        const query = `DELETE FROM ${storedata.Sem_Name}_languages WHERE id=${pdata.id};`
        async function adds() {
          try {
            const res = await delsteptwoone({ query })
            console.log(res)
            if (res.status == "200") {
              console.log("sucess")
            }
          } catch (err) {
            console.log("err")
          } finally {
            props.valuee()
          }
        }
        if (check) {
          adds();
        }
      } else if (props.data == "subjectbtn") {
        const check = window.confirm("Are u sure of deleting the records")
        const pdata = p.data
        const query = `DELETE FROM ${storedata.Sem_Name}_subjects WHERE id=${pdata.id};`
        async function adds() {
          try {
            const res = await delsteptwoone({ query })
            console.log(res)
            if (res.status == "200") {
              console.log("sucess")
            }
          } catch (err) {
            console.log("err")
          } finally {
            props.valuee()
          }
        }
        if (check) {
          adds();
        }
      }else if (props.data == "stdinfobtn") {
        const check = window.confirm("Are u sure of deleting the records")
        const pdata = p.data
        const query = `DELETE FROM ${storedata.Sem_Name}_studentinfo WHERE id=${pdata.ID};`
        async function adds() {
          try {
            const res = await delsteptwoone({ query })
            console.log(res)
            if (res.status == "200") {
              console.log("sucess")
            }
          } catch (err) {
            console.log("err")
          } finally {
            props.valuee()
          }
        }
        if (check) {
          adds();
        }
      }
    }
    return <Button variant="contained" color="error" onClick={handledelete}>Delete</Button>

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
      dispatch(setolddata(p.data))
      props.click()
      props.setUpdate(true)
      props.setOpen(true)
      props.setformData(p.data)
    }
    return <Button variant="contained" onClick={handleupdate} className='space'>Update</Button>
  }
  const check = () => {
    if (props.check === "language") {
      return [
        { field: 'id', filter: true, sortable: true, sort: 'asc', minWidth: 100 },
        { field: 'languages', filter: true, sortable: true },
        { headerName: "Update", field: 'Update', cellRenderer: Updatecell, minWidth: 200 },
        { headerName: "Edit", field: 'Name', cellRenderer: Deletecell, minWidth: 200 },
        { headerName: "GetDetails", field: 'id', cellRenderer: GetDetails, }
      ]
    }
    else if (props.check === "subject") {
      return [
        { field: 'id', filter: true, sortable: true, sort: 'asc', minWidth: 100 },
        { field: 'subject', filter: true, sortable: true },
        { headerName: "Update", field: 'Update', cellRenderer: Updatecell, minWidth: 200 },
        { headerName: "Edit", field: 'Name', cellRenderer: Deletecell, minWidth: 200 },
        { headerName: "GetDetails", field: 'id', cellRenderer: GetDetails, }
      ]
    }
    else {
      return [
        { field: 'ID', filter: true, sortable: true, sort: 'asc', minWidth: 90 },
        { field: 'NAME', filter: true, sortable: true },
        { field: 'SECTION', filter: true, sortable: true, minWidth: 150 },
        { field: 'EMAIL', filter: true, sortable: true },
        { field: 'PASSWORD', filter: true, sortable: true },
        { field: 'LANGUAGE', filter: true, sortable: true, minWidth: 150 },
        { headerName: "Update", field: 'Update', cellRenderer: Updatecell, minWidth: 200 },
        { headerName: "Edit", field: 'Name', cellRenderer: Deletecell, minWidth: 200 },
        { headerName: "GetDetails", field: 'id', cellRenderer: GetDetails, }
      ]
    }
  }
  var Str = props.check
  const [columnDefs] = useState(check());
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