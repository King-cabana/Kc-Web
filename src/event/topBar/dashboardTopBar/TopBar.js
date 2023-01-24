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
import { TextButton } from "../../../components/button/button";
import { SlBell } from "react-icons/sl";
import Profile from "../../../images/pexels-george-ikwegbu-2379429.jpg";
import { RiArrowDownSLine } from "react-icons/ri";

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
            <TextButton style={{ color: "black" }}>Help</TextButton>
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
              <ProfilePicture>
                <img src={Profile} alt="pp" />
              </ProfilePicture>
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
