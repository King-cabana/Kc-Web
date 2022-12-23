import React from 'react'
import TopBar from './eventComponents/topBar/TopBar'
import { Sidebar, sidebarClasses, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineCalendar, HiOutlineDocumentText} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import '../App.css'



const Event = () => {

  return (
    <div style={{maxWidth:'100%'}}>
    <TopBar/>
    <Sidebar style={{height:'90vh', paddingTop:'2%'}}
    rootStyles={{
      [`.${sidebarClasses.container}`]: {
        backgroundColor: 'white',
        

      },
    }}
    >
    <Menu 
     menuItemStyles={{
      div: ({ level, active, hover }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: hover ? 'black' : '#ff2957',
            backgroundColor: active ? 'white' : undefined,
          };
        
      },
    }}
    >
        <MenuItem className='MenuItem' icon={<AiOutlineHome />} routerLink={<Link to="/eventHome" />}> 
        Home </MenuItem>
        <SubMenu className='MenuItem' icon={<HiOutlineCalendar/>} label="Event">
        <MenuItem className='SubMenu'icon={<BsDot/>}> Create </MenuItem>
        <MenuItem className='SubMenu' icon={<BsDot/>}> Sponsor </MenuItem>
        </SubMenu>
        <SubMenu className='MenuItem' icon={<HiOutlineDocumentText />} label="Report" >
        <MenuItem className='SubMenu' icon={<BsDot/>} routerLink={<Link to="/report" />}> Event History </MenuItem>
        <MenuItem className='SubMenu' icon={<BsDot/>}> Event Analytics </MenuItem>
        </SubMenu>
        <MenuItem className='MenuItem' icon={<FiSettings/>} routerLink={<Link to="/settings" />}> 
            Settings </MenuItem>
    </Menu>
    </Sidebar>

    </div>
  )
}


export default Event