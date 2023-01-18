import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import TopBar from '../topBar/dashboardTopBar/TopBar';
import { ContentBody, SidebarNav, SidebarWrap, Nav, NavIcon, DisplayMode } from './Sidebar.Styled';

const Sidebar = ({children}) => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <TopBar/>  
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>   
        <DisplayMode>
         
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        
        </SidebarNav>
        <ContentBody>
        {children}
        </ContentBody>
        </DisplayMode>
    
    </>
  );
};

export default Sidebar;
