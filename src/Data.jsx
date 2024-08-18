import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaNoteSticky } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";

export const sideNavData = [
  {
    icon: <MdKeyboardDoubleArrowRight />,
    heading: "Upcomming",
    link: "/upcoming",
  },
  {
    icon: <IoList />,
    heading: "Today",
    link: "/today",
  },
  {
    icon: <SlCalender />,
    heading: "Calender",
  },
  {
    icon: <FaNoteSticky />,
    heading: "Sticky Wall",
    link: "/sticky",
  },
];

export const listData = [
  {
    div: <div className="h-[12px] w-[12px] rounded-[4px] bg-red-500"></div>,
    text: "Personal",
    number: 3,
  },
  {
    div: <div className="h-[12px] w-[12px] rounded-[4px] bg-blue-400"></div>,
    text: "Work",
    number: 6,
  },
  {
    div: <div className="h-[12px] w-[12px] rounded-[4px] bg-yellow-400"></div>,
    text: "List 1",
    number: 3,
  },
];

export const upcomingTodayData = [
  {
    check: <input type="checkbox" />,
    text: "Research content ideas",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Create a database of guest",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Renew driving license",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "consult accountant",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Research content ideas",
    icon: <IoArrowForwardOutline />,
  },
];

export const upcomingTomorrowData = [
  {
    check: <input type="checkbox" />,
    text: "Create job posting for SEO speacilist",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Request design asset for landing page",
    icon: <IoArrowForwardOutline />,
  },
];
export const upcomingThisWeek = [
  {
    check: <input type="checkbox" />,
    text: "Research content ideas",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Create a database of guest",
    icon: <IoArrowForwardOutline />,
  },
  {
    check: <input type="checkbox" />,
    text: "Print Business card",
    icon: <IoArrowForwardOutline />,
  },
];
