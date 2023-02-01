import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayMode = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    /* display: block; */
  }
`;


export const SidebarNav = styled.nav`
  background: white;
  width: 20%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  padding-top: 1%;

  @media screen and (max-width: 480px) {
    width: 100%;
    position: sticky;
    z-index: 1;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  /* height: 100%; */
  background-color: #fffdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Nav = styled.div`
  height: 40px;
  display: hidden;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: "480px") {
    /* display: block; */
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  color: black;
  z-index: 10;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }

`;
