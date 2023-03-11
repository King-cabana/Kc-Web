import React, { useState } from "react";
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
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  

  return (
    <>
      <TopBar />

      <DisplayMode>
        {!sidebar && (
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              {SidebarData.map((item, index) => {
                return (
                  <SubMenu
                    click={() =>{ setSidebar(false)}}
                    item={item}
                    key={index}
                  />
                );
              })}
            </SidebarWrap>
          </SidebarNav>
        )}
        <ContentBody>
          <Nav>
            <NavIcon to="#" onClick={showSidebar}>
              {!sidebar && <AiIcons.AiOutlineClose/>}

              {sidebar && <FaIcons.FaBars />}
            </NavIcon>
          </Nav>
          {children}
        </ContentBody>
      </DisplayMode>
    </>
  );
};

export default Sidebar;
