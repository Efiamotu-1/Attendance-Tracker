import React from 'react'
import CourseTable from '../features/courses/CourseTable'
import AddCourse from '../features/courses/AddCourse'

function Courses() {
  return (
    <div className='flex flex-col gap-5'>
    <div >
      <h4>All Courses</h4>  
    </div>
    <CourseTable />
    <AddCourse />
    </div>
  )
}

export default Courses