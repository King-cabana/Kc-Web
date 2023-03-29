import React, { useState, useEffect } from "react";
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
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Sidebar = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const matches = useMediaQuery("(min-width:960px)");
  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();
  const user = useSelector((state) => state.userDetails);

  useEffect(() => {
    if (!user?.isSignedIn) {
      navigate("/signup");
      toast.error("Sign up or Login");
      console.log("Sign up or Login");
      console.log("Component rendered: ", Date.now());
    }
  }, [user?.isSignedIn, navigate]);

  if (!user?.isSignedIn) {
    return null;
  }

  const Side = () => {
    return (
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return (
              <SubMenu
                click={() => {
                  setSidebar(false);
                }}
                item={item}
                key={index}
              />
            );
          })}
        </SidebarWrap>
      </SidebarNav>
    );
  };
  return (
    <>
      <TopBar />

      <DisplayMode>
        {matches && <Side />}
        {sidebar && <Side />}
        <ContentBody>
          <Nav>
            <NavIcon to="#" onClick={showSidebar}>
              {<FaIcons.FaBars />}

              {/* {sidebar && <FaIcons.FaBars />} */}
            </NavIcon>
          </Nav>
          {children}
        </ContentBody>
      </DisplayMode>
    </>
  );
};

export default Sidebar;
