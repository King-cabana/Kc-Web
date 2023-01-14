import React from 'react'
import { SidebarBody,Menu, MenuItem, LinkToPage,MenuItemIconHolder,  SubMenu, SubMenuItem, SubMenuTitle } from './SideBarStyled'
import {AiOutlineHome} from 'react-icons/ai'
import {HiOutlineCalendar, HiOutlineDocumentText} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import { Link } from 'react-router-dom'


const SideBar = () => {
  return (
    <SidebarBody>
        <Menu>
        <MenuItem >
        <MenuItemIconHolder>
        <AiOutlineHome style={{marginRight:'10px'}}/>
        <LinkToPage to="/">Home</LinkToPage>
        </MenuItemIconHolder>
        </MenuItem>

        <MenuItem >
        <MenuItemIconHolder>
        <HiOutlineCalendar style={{marginRight:'10px'}}/>
        <LinkToPage to="/event">Event</LinkToPage>
        </MenuItemIconHolder>
        </MenuItem>

        <MenuItem>
        <MenuItemIconHolder>
        <HiOutlineDocumentText style={{marginRight:'10px'}}/> 
        <LinkToPage to="/report">Report</LinkToPage>
        </MenuItemIconHolder>
        </MenuItem>

        <MenuItem>
        <MenuItemIconHolder>
        <FiSettings style={{marginRight:'10px'}}/>
        <LinkToPage to="/settings">Settings</LinkToPage>
        </MenuItemIconHolder>
        </MenuItem>
        </Menu>
        {/* <SubMenu>
          <SubMenuTitle>More</SubMenuTitle>
          <SubMenuItem>
            <Link to="/products">Products</Link>
          </SubMenuItem>
          <SubMenuItem>
            <Link to="/contact">Contact</Link>
          </SubMenuItem>
        </SubMenu> */}
    </SidebarBody>
  )
}

export default SideBar