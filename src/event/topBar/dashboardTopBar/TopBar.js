import React from "react";
import { LogoLink } from "../../../components/navbar/Navbar.styled";
import {
  TopBarContainer,
  TopBarLogo,
  TopBarItemHolder,
  ItemsHolder,
  ItemsHolderInner,
  ProfilePicture,
} from "./TopBar.styled";
import Logo from "../../../images/KCLogo.svg";
import SearchBar from "../../../components/searchBar/SearchBar";
import { SlBell } from "react-icons/sl";
// import Profile from "../../../images/pexels-george-ikwegbu-2379429.jpg";
import { RiArrowDownSLine } from "react-icons/ri";
import { KBTextM } from "../../../components/fonts/fontSize";



const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarLogo>
        <LogoLink to="/">
          <img src={Logo} alt="King Cabana Logo" />
        </LogoLink>
      </TopBarLogo>
      <TopBarItemHolder>
        <SearchBar />
        <ItemsHolder>
          <ItemsHolderInner>
            <SlBell
              style={{
                cursor: "pointer",
              }}
            />
            <div
              style={{
                width: "max-content",
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProfilePicture style={{border:'1px solid #FF2957', display:'flex', justifyContent:'center', alignItems:'center'}}>
                PE
              </ProfilePicture>
              <KBTextM>Peter Enumah</KBTextM>
              <RiArrowDownSLine
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </ItemsHolderInner>
        </ItemsHolder>
      </TopBarItemHolder>
    </TopBarContainer>
  );
};

export default TopBar;
