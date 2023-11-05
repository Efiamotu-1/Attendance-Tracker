import React from 'react'
import ReportTable from '../features/reports/ReportTable'
import AddReport from '../features/reports/AddReport'

function Reports() {
  return (
    <div className='flex flex-col gap-5'>
    <div>
      <h4>All Reports</h4>  
    </div>
    <ReportTable />
    <AddReport />
    </div>
  )
}

export default Reports