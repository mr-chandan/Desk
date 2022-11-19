import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "../Tables/Tables.css"
import Button from '@mui/material/Button';

const det = [
  { id: '1', course: 'Bca' },
  { id: '2', course: 'Bba' },
  { id: '3', course: 'Bcom' },
  { id: '4', course: 'Puc' }]
const Tables = (props) => {
  const [rowData] = useState(det);

  const onSelectionChanged = (event) => {
    const select = event.api.getSelectedRows()
    select.forEach(element => {
      console.log(element.Name)
    });
  }

  const SimpleComp = (p) => {
    const handleupdate = () => {
      console.log(p.data)
      props.setUpdate(true)
      props.setformData(p.data)
      props.open()

    }
    const handledelete = () => {

    }
    return <><Button variant="contained" onClick={handleupdate} className='space' >Update</Button>
      <Button variant="contained" color="error" onClick={handledelete}>Delete</Button>
    </>
  }
  const GetDetails = (p) => {
    const click = () => {
      props.onpress()
      console.log(p.data)
    }
    return <Button variant="contained" onClick={click} className='space' >Details</Button>
    
  }
  const [columnDefs] = useState([
    {
      field: 'id',
      filter: true,
      sortable: true,
    },
    { field: 'course', filter: true, sortable: true },
    {
      headerName: "Edit",
      field: 'Name',
      cellRenderer: SimpleComp,
      minWidth:300
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
          onSelectionChanged={onSelectionChanged}
          suppressClickEdit="true"
          suppressRowClickSelection={true}
          domLayout={'autoHeight'}
          defaultColDef={{ flex: 1, minWidth: 200 }} />
      </div>
    </div>

  );
}

export default Tables

// headerCheckboxSelection: true,
// checkboxSelection: true,
// showDisabledCheckboxes: true