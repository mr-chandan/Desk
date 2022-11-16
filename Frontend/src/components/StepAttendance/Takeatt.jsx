import React, { useState } from 'react';
import styles from '../StepAttendance/Takeatt.module.css'
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { details } from './detail';

const Takeatt = () => {
  const [rowData] = useState(details);
  const onSelectionChanged = (event) => {
    const select = event.api.getSelectedRows()
    select.forEach(element => {
      console.log(element.Name)
    });
  }
  const onGridReady = params => {
    params.columnApi.autoSizeAllColumns();
};
  const [columnDefs] = useState([
    {
      field: 'Name',
      filter: true,
      sortable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      showDisabledCheckboxes: true
    },
    { field: 'Uucmsid', filter: true, sortable: true },
    { field: 'Class', filter: true, sortable: true },
    { field: 'Section', filter: true, sortable: true },
    { field: 'Age', filter: true, sortable: true },
    { field: 'Location', filter: true, sortable: true },
    { field: 'Class', filter: true, sortable: true },
  ]);
  return (

    <div className={styles.wrap}>
      <div className={styles.heading}> Class Bca Python Attendance</div>
      <div className="ag-theme-alpine" style={{ maxWidth: '100%', height: '100%', boxSizing: "border-box" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
          suppressClickEdit="true"
          suppressRowClickSelection={true} 
          onGridReady={onGridReady}/>

      </div>
      <div className={styles.submit}>
        <div className={styles.txt}>Did you want to Submit?</div>
        <><button className={styles.btn}>Submit</button></>
      </div>
    </div>
  );
}

export default Takeatt