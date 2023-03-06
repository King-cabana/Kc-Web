import styled from "styled-components";
import {Link} from "react-router-dom";

export const TopBarContainer = styled.div`
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #FF2957;
  /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); */

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TopBarLogo = styled.div`
  height: inherit;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 20%;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const TopBarItemHolder = styled.div`
  height: inherit;
  width: 80%;
  padding: 0 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    /* width: 10%; */
  }
`;

export const ItemsHolder = styled.div`
  display: flex;
  height: 6vh;
  width: 304px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;

export const ItemsHolderInner = styled.div`
  height: inherit;
  width: 230px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: inherit;
  }
`;

export const ProfilePicture = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;


export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`

export const DropDownBtn = styled.button`
  padding: 5px;
  background-color: transparent;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DropdownContent = styled.div`
  display: block;
  position: absolute;
  float: right;
  right: 0;
  background-color: white;
  border:1px solid #FF2957;
  border-radius: 10px;
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`
export const DropdownContentLink = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`

// /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
// .show {display:block;}
