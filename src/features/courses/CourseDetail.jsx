import React from 'react'
import { useMoveBack } from '../../hooks/useMoveBack'
import CourseDataBox from './CourseDataBox'
import ReportTable from '../reports/ReportTable'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Button from '../../ui/Button'
import EditCourseForm from './EditCourseForm'

function CourseDetail() {
  const moveback = useMoveBack()
  return (
    <>
       <div className='flex justify-between items-center pb-5 relative'>
        <div className='flex gap-3 items-baseline'>
          <h1 className='font-[1.5rem] font-semibold'>International trade Law #CIL</h1>
          <p className='bg-[#166534] text-[#dcfce7] py-[0.2rem] px-[0.6rem] rounded-xl text-[0.6rem] uppercase font-semibold'>Compulsory</p>
        </div>
        <button onClick={moveback} className='absolute top-[-35px] right-2'>&larr; Back</button>
      </div>

      <CourseDataBox />
      
      <ReportTable />

      <div className='flex gap-2 justify-end mt-5'>
      <Modal>
          <Modal.Open opens="edit">
            <Button variation="primary">Edit Course</Button>
          </Modal.Open>

          <Modal.Window name="edit">
            <EditCourseForm />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete Course</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete 
            resourceName="booking"
            disabled={false}
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveback}>
          Back
        </Button>
      </div>
    </>
  )
}

export default CourseDetail
