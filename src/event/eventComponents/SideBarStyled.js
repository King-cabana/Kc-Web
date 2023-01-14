import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";


export const SidebarBody = styled.div`
  height: 90vh;
  width: 275px;
  padding-top: 2%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.ul`
    text-decoration: none;
    

    li,a
    {
    text-decoration: none;
    color: black;
    cursor: pointer;
    

    &:hover {
      text-decoration: none;
      color: #ff2957;
      font-weight: 500;
      cursor: pointer;
    }

    &.active {
      color: #ff2957;
      font-weight: 500;
      border-right: 4px solid #ff2957;
    }
    }
    
`

export const LinkToPage = styled(Link)`
   text-decoration:none;
   color: black;

`

export const MenuItem = styled.li`
  width: inherit;
  height: 10vh;
  padding: 2% 10%;
  list-style: none;
  text-decoration: none;
  justify-content: flex-start;
  align-items: center;
  display: flex;

  a{
    color: black;
  }

  &:hover{
    background-color: #FEF5F7;
    color: #ff2957;

    a{
    color:  #ff2957;
    }
  }

  /* &.active{
    a{
    color:  #ff2957;
    }
    border-right: 2px solid #ff2957;
    background-color: white;
  } */
`;

export const MenuItemIconHolder = styled.div`
    height:inherit;
    width: max-content;
    align-items:center;
    justify-content:space-between;
    display:flex;
`

export const SubMenu = styled.div`
   /* display: ${props => (props.isVisible ? 'block' : 'none')}; */
    list-style: circle;
    width: inherit;
    height: 10vh;
    padding: 2% 10%;
    text-decoration: none;
    display: none;
    
`;

export const SubMenuTitle = styled.li`
  /* Add styles for the submenu title here */
`;

export const SubMenuItem = styled.li`
  /* Add styles for the submenu items here */
`;

