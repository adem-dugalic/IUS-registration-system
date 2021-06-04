import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbars/Navbar.js";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import studentRoutes from "../studentRoutes";
import adminRoutes from "../adminRoutes";
import professorRoutes from "../professorRoutes";

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

// function getWindowDimensions() {
//   if (typeof window !== "undefined") {
//     const { innerWidth: width, innerHeight: height } = window;
//     if (width < 800) {
//       return true;
//     } else return false;
//   }
// }

const Layout = (props) => {
  const classes = useStyles();
  const [user, setUser] = useState("student"); //smt like Cokie.user??
  const mainPanel = React.createRef();
  const [color, setColor] = React.useState("blue");
  const [curPage, setCurPage] = React.useState("Home");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const [isMobile, setisMobile] = useState(props.mobile);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  function whichuser() {
    if (user === "student") {
      return studentRoutes;
    } else if (user === "professor") {
      return professorRoutes;
    } else {
      return adminRoutes;
    }
  }
  React.useEffect(() => {
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.root}>
      <div className={classes.pannelDiv}>
        {/* <Drawer
          mobileOpenFunction={props.setMobileOpen}
          mobileOpen={props.mobileOpen}
          user={"admin"}
        /> */}
        <Sidebar
          routes={whichuser()}
          logoText={"IUS Student"}
          handleDrawerToggle={handleDrawerToggle}
          setCurPage={setCurPage}
          open={mobileOpen}
          color={color}
          // {...rest}
        />
        <main className={classes.main}>
          <Navbar
            routes={whichuser()}
            curPage={curPage}
            handleDrawerToggle={handleDrawerToggle}
            // {...rest}
          />
          {/* <div className={classes.bardDiv}> */}
          {/* {isMobile ? (
              <Bar
                setMobileOpen={props.setMobileOpen}
                mobileOpen={props.mobileOpen}
              />
            ) : (
              ""
            )} */}
          {/* </div> */}
          <div className={classes.workArea}>{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
