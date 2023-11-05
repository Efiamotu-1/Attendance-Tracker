import React from 'react'
import { HiArrowRightOnRectangle, HiBars4, HiOutlineUser } from 'react-icons/hi2'

function Header({setShowSideBar}) {
  return (
    <div className='bg-[#18212f] p-4 border-b border-solid border-[#1f2937] flex justify-between gap-2 items-center justify-end'>
    <div className='flex' onClick={() => setShowSideBar(true)}><HiBars4 /></div>
    <div className='flex gap-2 items-center justify-end'>
      <p><HiOutlineUser /></p>
      <p><HiArrowRightOnRectangle /></p>
    </div>
  </div>
  )
}

export default Header