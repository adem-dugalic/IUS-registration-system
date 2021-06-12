import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbars/Navbar.js";
import { makeStyles } from "@material-ui/core/styles";
import studentRoutes from "../studentRoutes";
import adminRoutes from "../adminRoutes";
import professorRoutes from "../professorRoutes";
import { useCurrentUser, useGetUser } from "../services/userService";
// import { useUsers } from "../services/userService";
import Cookies from "universal-cookie";
import { useRouter } from "next/router";
import { CircularProgress, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    position: "relative",
    backgroundImage: "url(/banner1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  pannelDiv: {
    position: "relative",
    display: "flex",
    // top: "10%",
    // left: "10%",
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: "rgb(255, 255, 255, 0.8)",
    // paddingLeft: 10,
  },
  main: {
    position: "relaive",
    width: "100%",
    //overflowY: "auto",
  },
  barDiv: {
    position: "sticky",
    width: "100%",
  },
  workArea: {
    position: "relaive",
    width: "100%",
    height: "100%",
    // overflowY: "clip",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  let location = useRouter();
  const [color, setColor] = React.useState("blue");
  const [curPage, setCurPage] = React.useState("Home");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const cookies = new Cookies();
  const { data: mrUser, status } = useCurrentUser(cookies.get("userId"));
  React.useEffect(() => {
    if (status !== "success" && mrUser) {
      return (
        <CircularProgress
          style={{ position: "relative", left: "50%", top: "50%" }}
        />
      );
    }
  }, [mrUser]);
  if (cookies.get("token") === undefined) {
    typeof window !== "undefined" && location.push("/");
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  function whichuser() {
    if (location.pathname.includes("/student/")) {
      return studentRoutes;
    } else if (location.pathname.includes("/professor/")) {
      return professorRoutes;
    } else {
      return adminRoutes;
    }
  }
  return (
    <div className={classes.root}>
      <div className={classes.pannelDiv}>
        <Sidebar
          routes={whichuser()}
          handleDrawerToggle={handleDrawerToggle}
          setCurPage={setCurPage}
          open={mobileOpen}
          color={color}
          user={mrUser}
        />
        <main className={classes.main}>
          <Navbar
            routes={whichuser()}
            curPage={curPage}
            handleDrawerToggle={handleDrawerToggle}
          />
          <div className={classes.workArea}>{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
