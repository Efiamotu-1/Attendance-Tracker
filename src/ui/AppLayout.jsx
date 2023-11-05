import React, { useState } from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  const [showSideBar, setShowSideBar] = useState(false)
  return (
    <div className='h-screen text-white'>
      <Header setShowSideBar={setShowSideBar}/>
      {showSideBar && <Sidebar setShowSideBar={setShowSideBar}/>}
      <Main setShowSideBar={setShowSideBar}/>
    </div>
  )
}

export default AppLayout