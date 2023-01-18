import React from "react";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
  },

  {
    title: "Event",
    // path: '/event',
    icon: <HiIcons.HiOutlineCalendar />,
    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      {
        title: "Create",
        path: "/event/create",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
      {
        title: "Sponsor",
        path: "/event/sponsor",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Report",
    // path: '/report',
    icon: <HiIcons.HiOutlineDocumentText />,

    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      {
        title: "Event history",
        path: "/report/eventhistory",
        icon: <BsIcons.BsDot />,
      },
      {
        title: "Event analytics",
        path: "/report/eventanalytics",
        icon: <BsIcons.BsDot />,
      },
    ],
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <FiIcons.FiSettings />,
  },
];
