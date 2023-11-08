import React from 'react'
import { useMoveBack } from '../../hooks/useMoveBack'
import CourseDataBox from './CourseDataBox'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Button from '../../ui/Button'
import EditCourseForm from './EditCourseForm'
import { useCourse } from './useCourse'
import Spinner from '../../ui/Spinner'
import Empty from '../../ui/Empty'
import CourseReportTable from './CourseReportTable'
import { useDeleteCourse } from './useDeleteCourse'

function CourseDetail() {
  const moveback = useMoveBack()
  const {course, isLoading} = useCourse()
  const {deleteCourse, isDeleting} = useDeleteCourse()
  if (isLoading) return <Spinner />;
  if (!course) return <Empty resourceName="course" />;


  const {id: courseId, course_title,course_priority, department } = course

  return (
    <>
       <div className='flex justify-between items-center pb-5 relative'>
        <div className='flex gap-3 items-baseline'>
          <h1 className='font-[1.5rem] font-semibold'>{course_title} #{department}</h1>
         {course_priority === true ? <p className='bg-[#166534] text-[#dcfce7] py-[0.2rem] px-[0.6rem] rounded-xl text-[0.6rem] uppercase font-semibold'>Compulsory</p> : 
         <p className='bg-[#075985] text-[#e0f2fe] py-[0.2rem] px-[0.6rem] rounded-xl text-[0.6rem] uppercase font-semibold'>Elective</p> }
        </div>
        <button onClick={moveback} className='absolute top-[-20px] right-2'>&larr; Back</button>
      </div>

      <CourseDataBox course={course} />
      
      <CourseReportTable course={course_title}/>

      <div className='flex gap-2 justify-end mt-5'>
      <Modal>
          <Modal.Open opens="edit">
            <Button variation="primary">Edit Course</Button>
          </Modal.Open>

          <Modal.Window name="edit">
            <EditCourseForm course={course}/>
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete Course</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete 
            resourceName="course"
            disabled={isDeleting}
            onConfirm={() => deleteCourse(courseId)}
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
