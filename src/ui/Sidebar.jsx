import React from 'react'
import MainNav from './MainNav'
import { HiXCircle } from 'react-icons/hi2'
import { useUsersCount } from '../features/authentication/useUsersCount'

function Sidebar({setShowSideBar}) {
  const {usersCount} = useUsersCount()
  return (
    <div className='bg-[#18212f] pb-[1.6rem] border-r border-solid border-[#1f2937] w-[16.5rem] fixed top-0 bottom-0 z-20'>
        <div className='mb-[5rem] flex justify-end p-2 font-bold text-2xl' onClick={() => setShowSideBar(false)}>
            <HiXCircle />
        </div>
            
    <div className='mt-[5rem] flex flex-col gap-2 '>
        <MainNav setShowSideBar={setShowSideBar}/>
    </div>
    <p className='fixed bottom-5 mx-5 font-semibold text-[1rem] uppercase'>users count -  {usersCount}</p>
    </div>
  )
}

export default Sidebar