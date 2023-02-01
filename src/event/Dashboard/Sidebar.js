import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import TopBar from "../topBar/dashboardTopBar/TopBar";
import {
  ContentBody,
  SidebarNav,
  SidebarWrap,
  Nav,
  NavIcon,
  DisplayMode,
} from "./Sidebar.Styled";

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <TopBar />
      {/* <Nav>
        <NavIcon to="#">
          <FaIcons.FaBars onClick={showSidebar} />
        </NavIcon>
      </Nav> */}
      <DisplayMode>
     
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <div style={{width:'inherit', height:'20vh', backgroundColor:'pink', padding:'20px'}}>
            <div style={{width:'100%', height:'10vh', backgroundColor:'blue'}}>

            </div>
          </div>
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



