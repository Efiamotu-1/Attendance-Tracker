import React from 'react'
import { HiArrowRightOnRectangle, HiBars4, HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

function Header({setShowSideBar}) {
  const {name} = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  function logOut() {
    navigate('/login')
    localStorage.removeItem("user")
  }
  return (
    <div className='bg-[#18212f] p-4 border-b border-solid border-[#1f2937] flex justify-between gap-2 items-center justify-end'>
    <div className='flex text-[1.5rem]' onClick={() => setShowSideBar(true)}><HiBars4 /></div>
    <div>Attendance Tracker App</div>
    <div className='flex gap-2 items-center justify-end'>
      <p className='flex items-center gap-1'><HiOutlineUser /> <span>{name}</span></p>
      <p onClick={logOut} className='hover:text-stone-700'><HiArrowRightOnRectangle /></p>
    </div>
  </div>
  )
}

export default Header