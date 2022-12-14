import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.div`
    height: 4vh;
    width: 100%;
    display: flex;
    padding: 3% 8%;
    align-items: center;
    justify-content: space-between; 
    top: 0;
    background-color: white;
    z-index: 1;
    
    @media (max-width: 960px){
        position: sticky;
        height: 10vh;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
        z-index: 1;
    }

  @media (max-width: 960px) {
    position: sticky;
    height: 10vh;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const NavLogo = styled.div`
  width: 12vw;
  cursor: pointer;

<<<<<<< HEAD



=======
>>>>>>> 75483f8dd9db8532a22badc3603cd11367d82b59
  img {
    height: 35;
    width: 35;
  }
`;


export const NavContent = styled.div`
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`;

export const NavMobile = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    margin-top: 2%;
    right: 8%;
    cursor: pointer;
  }
`;

export const NavItems = styled.ul`
  float: left;
  list-style: none;
  display: flex;
  width: 80vw;
  justify-content: space-between;
  align-items: center;

  li,
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    text-align: center;

    &:hover {
      text-decoration: none;
      color: #ff2957;
      font-weight: 600;
      cursor: pointer;
    }

    &.active {
      color: #ff2957;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 56px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 1s ease;
    background-color: white;
    padding-top: 20%;
  }

  @media screen and (min-width: 600px) {
    top: 100px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

export const NavBarLink = styled(NavLink)`
  /* &:active{
        color: #FF2957;
        } */

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2%;
    width: 100vw;
    display: table;

    &:hover {
      color: #ff2957;
    }

    /* &:active{
        color: #FF2957;
        } */
  }
`;

export const NavGroup = styled.div`
  width: 12vw;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    justify-content: center;
    height: 50vh;
    width: 100%;
  }
`;

export const NavSearchHolder = styled.div`
  width: 2vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 960px) {
    visibility: hidden;
  }
`;

export const NavButtonLink = styled(Link)`

  @media screen and (max-width: 960px) {
    height: 10vh;
  }
`;

export const NavButton = styled.button`
  height: 8vh;
  width: 11vw;
  border: 1.5px none;
  border-radius: 8px;
  background-color: #ff2957;
  color: white;
  cursor: pointer;
  font-weight: 600;

  /* &:hover{
            background-color: #FF2957;
            color: white;
        } */

  &:hover {
    background-color: rgba(255, 41, 87, 0.8);
    color: white;
  }

  @media screen and (max-width: 960px) {
    width: 40vw;
    margin-bottom: 5%;
  }
`;

export const AccessButton = styled(NavButton)`
  width: 14vw;
  background-color: #ff2957;
  color: white;
  font-weight: 600;

  &:hover {
    background-color: white;
    color: #ff2957;
    border: 1.5px solid  #ff2957;
  }

  @media screen and (max-width: 960px) {
    width: 40vw;
    margin-bottom: 5%;
  }
`;
