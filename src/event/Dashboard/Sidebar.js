import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import TopBar from '../topBar/TopBar';
import { ContentBody, SidebarNav, SidebarWrap } from './Sidebar.Styled';

const Sidebar = ({children}) => {

  return (
    <>
        <TopBar/>    
        <div style={{display:'flex'}}>
        <SidebarNav>
          <SidebarWrap>
           
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        
        </SidebarNav>
        <ContentBody>
        {children}
        </ContentBody>
        </div>
    
    </>
  );
};

export default Sidebar;
