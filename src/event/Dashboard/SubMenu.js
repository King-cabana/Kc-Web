import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "./SubMenu.Styled";

const SubMenu = ({ item, click = () => null, setSidebar }) => {
  const [subnav, setSubnav] = useState(false);


  const showSubnav = () =>{ 
    setSubnav(!subnav);
    setSidebar(true);
  }

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={() => {
          item.subNav ? showSubnav() : click();
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {item?.subNav?.map((subItem, index) => {
    if (subnav) {
      return (
        <DropdownLink to={subItem?.path} key={index} onClick={click}>
          {subItem?.icon}
          <SidebarLabel>{subItem?.title}</SidebarLabel>
        </DropdownLink>
      );
    } else {
      return null;
    }
})}

    </>
  );
};

export default SubMenu;
