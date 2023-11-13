import React from 'react'
import ReportTable from '../features/reports/ReportTable'
import AddReport from '../features/reports/AddReport'
import { useCourses } from '../features/courses/useCourses'
import Spinner from '../ui/Spinner'

function Reports() {
  const {courses, isLoading} = useCourses()
  if(isLoading) return <Spinner />
  return (
    <div className='flex flex-col gap-5'>
    <div className='flex justify-between items-center'>
      <h4>All Reports</h4>  
    {courses.length > 0 && <AddReport courses={courses}/>}
    </div>
    <ReportTable courses={courses}/>
    </div>
  )
}

export default Reports