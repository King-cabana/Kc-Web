import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import {
  ContentBody,
  SidebarNav,
  SidebarWrap,
  DisplayMode,
  Nav,
  NavIcon,
} from "./Sidebar.Styled";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <TopBar />
      <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <DisplayMode>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        <ContentBody>{children}</ContentBody>
      </DisplayMode>
    </>
  );
};

export default Sidebar;



