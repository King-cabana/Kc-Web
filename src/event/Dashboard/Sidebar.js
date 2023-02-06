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
} from "./Sidebar.Styled";
import { PrimaryButton } from "../../components/button/button";

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
          <div style={{width:'inherit', height:'22vh', padding:'15px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <p style={{fontSize:'12px', color:'#FF2957'}}>Event Organizer</p>
            <div style={{width:'100%', height:'10vh', display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'10px'}}>
              <div style={{height:'40px', width:'40px', borderRadius:'6px', backgroundColor:'green'}}>

              </div>
              <p style={{textAlign:'center', fontSize:'13px', fontWeight:'bold', color:'#484848'}}>Department of Physics</p>
              <RiArrowDownSLine
                style={{
              cursor: "pointer",
              }}
        />
            </div>
            <PrimaryButton style={{borderRadius:'5px'}}>Manage Team </PrimaryButton>
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



