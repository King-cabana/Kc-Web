import React from 'react'
import LeftSideBar from './eventComponents/leftSidebar/LeftSideBar'
import TopBar from './eventComponents/topBar/TopBar'

const Event = () => {
  return (
    <div style={{maxWidth:'100%'}}>
    <TopBar/>
    <LeftSideBar/>

    </div>
  )
}

export default Event