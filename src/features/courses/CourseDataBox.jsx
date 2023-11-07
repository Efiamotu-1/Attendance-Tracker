import React from 'react'
import { HiAcademicCap, HiBookOpen, HiNewspaper, HiOutlineChatBubbleBottomCenterText, HiStar, HiTrophy } from 'react-icons/hi2'
import DataItem from '../../ui/DataItem'

function CourseDataBox({course}) {
  const {percentage, course_description, num_of_classes_held, num_of_classes_attended} = course
  return (
    <div className='bg-[#18212f] border border-solid border-[#1f2937] mb-5'>
        <div className='py-1 px-2 text-[#e0e7ff] bg-[#6366f1] font-[0.9rem] font-semibold flex items-center justify-between'>
        <div className='flex items-center gap-1 font-semibold font-[0.9rem]'>
          <HiNewspaper />
          <p>
            {course_description}
          </p>
        </div>
        </div>

        <div className='pt-[1.6rem] pr-[2rem] pb-[0.6rem] pl-[0.6rem]'>
        <DataItem
            icon={<HiAcademicCap />}
            label="Num of Class Held:"
          >
            {num_of_classes_held}
          </DataItem>

          <DataItem
            icon={<HiBookOpen />}
            label="Num of Class Attended:"
          >
            {num_of_classes_attended}
          </DataItem>

          <div className='flex items-center justify-between py-[0.8rem] px-[1.6rem] rounded-lg mt-[1.2rem] bg-[#166534] text-[#dcfce7]'>
          <DataItem
            icon={<HiTrophy />}
            label="Attendance Percentage:"
          >
           {percentage}% 
          </DataItem>
          </div>
        </div>
    </div>
  )
}

export default CourseDataBox