// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";

const dashboardRoutes = [
  {
    path: "/student/home",
    name: "Home",
    icon: Dashboard,
  },
  {
    path: "/student/grades",
    name: "Grades",
    icon: Person,
  },
  {
    path: "/student/transcript",
    name: "Transcript",
    icon: "content_paste",
  },
  {
    path: "/student/registration",
    name: "Registration",
    icon: LibraryBooks,
  },
  {
    path: "/student/contract",
    name: "Contract",
    icon: BubbleChart,
  },
  {
    path: "/student/schedule",
    name: "Schedule",
    icon: LocationOn,
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: Notifications,
  //   component: NotificationsPage,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-page",
  //   name: "RTL Support",
  //   rtlName: "پشتیبانی از راست به چپ",
  //   icon: Language,
  //   component: RTLPage,
  //   layout: "/rtl",
  // },
  // {
  //   path: "/LogOut",
  //   name: "LogOut",
  //   icon: Unarchive,
  // },
];

export default dashboardRoutes;
