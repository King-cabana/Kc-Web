import React from "react";
// import * as AiIcons from "react-icons/ai";
// import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
// import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";
import { Square2StackIcon } from "@heroicons/react/24/outline";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { DocumentChartBarIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { CogIcon } from "@heroicons/react/24/outline";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    // icon: <AiIcons.AiFillHome />,
    icon: (
      <Square2StackIcon
        class="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },

  {
    title: "Event",
    // path: "/event",
    // icon: <HiIcons.HiOutlineCalendar />
    icon: (
      <CalendarIcon class="h-6 h-6 text-gray-500" style={{ width: "20px" }} />
    ),

    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      {
        title: "Planning",
        path: "/event/noEvent",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
      {
        title: "History",
        path: "/event/history",
        icon: <BsIcons.BsDot />,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "Sponsor",
    // path: '/report',
    // icon: <HiIcons.HiOutlineDocumentText />,
    icon: (
      <DocumentChartBarIcon
        class="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),

    iconClosed: <MdIcons.MdKeyboardArrowRight />,
    iconOpened: <MdIcons.MdKeyboardArrowDown />,

    subNav: [
      {
        title: "Proposal",
        path: "/sponsor/proposal",
        icon: <BsIcons.BsDot />,
      },
      {
        title: "Matching",
        path: "/sponsor/matching",
        icon: <BsIcons.BsDot />,
      },
    ],
  },
  {
    title: "Messaging",
    path: "/messaging",
    icon: (
      <ChatBubbleLeftRightIcon
        class="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },
  {
    title: "Notifications",
    path: "/notification",
    icon: <BellIcon class="h-6 h-6 text-gray-500" style={{ width: "20px" }} />,
  },
  {
    title: "Attendees Mgt",
    path: "/attendeesmgt",
    icon: (
      <UserGroupIcon class="h-6 h-6 text-gray-500" style={{ width: "20px" }} />
    ),
  },
  {
    title: "Vendors Mgt",
    path: "/vendorsmgt",
    icon: (
      <Square2StackIcon
        class="h-6 h-6 text-gray-500"
        style={{ width: "20px" }}
      />
    ),
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: (
      <ChartBarIcon class="h-6 h-6 text-gray-500" style={{ width: "20px" }} />
    ),
  },

  {
    title: "Settings",
    path: "/settings",
    icon: <CogIcon class="h-6 h-6 text-gray-500" style={{ width: "20px" }} />,
  },
];
