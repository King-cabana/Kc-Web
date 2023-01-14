import React from 'react'
import TopBar from './eventComponents/topBar/TopBar'
import { Sidebar, sidebarClasses, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineCalendar, HiOutlineDocumentText} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../App.css'
import SideBar from './eventComponents/SideBar';



const Event = () => {

  return (
    <div>
      <TopBar/>
      <SideBar/>
        
    </div>
  )
}


export default Event