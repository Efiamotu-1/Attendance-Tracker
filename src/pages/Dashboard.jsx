import React from 'react'

function Dashboard() {
  return (
    <div className='leading-1 font-[1rem] flex flex-col gap-3.5'>
      <p className='font-semibold uppercase text-center'>Welcome to the Attendance tracker application</p>
        <p className=''>To begin you will be required to;</p>
        <p> Create a course or courses depending 
        on the number of courses you are taking for the semester, 
        you can do this by accessing the course tab on the menu.
        </p> 
        <p>Once a course is created you can click on the course to see more information and you are allowed to edit and delete a course.</p>
        <p> 
        After creating a course you will then be able to add daily reports using the reports tab based on whether the class held and whether 
        you attended the class.</p>
        Please note that for the sake of integrity these attendance reports are not editable once added so make sure to only add a report 
        when you have all the necessary details about a particular class. 
        

        <p>Also note that if a class does not hold you will not be able to add any attendance report.</p>
    </div>
  )
}

export default Dashboard