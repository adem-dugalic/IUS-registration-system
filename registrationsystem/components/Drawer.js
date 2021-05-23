import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import StudentDrawer from "./UserDrawer";
import AdminDrawer from "./AdminDrawer";
import DrawerLinks from "./DrawerLinks";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";

// import "../css/style.css";
// import Logo from "../img/IUSlogo2.png";
// import { Redirect, Link } from "react-router-dom";
// import Cookie from "js-cookie";

const drawerWidth = 200;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      display: "flex",
    },
    drawer: {
      position: "relative",
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      //display: "flex",
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      backgroundColor: "#292626",
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      position: "absolute",
      //display: "flex",
      minHeight: "100%",
      width: drawerWidth,
      borderRight: "none",
      backgroundColor: "#292626",
      color: "#fff",
    },
  })
);

export default function ResponsiveDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = props.mobileOpen;

  const handleDrawerToggle = () => {
    props.mobileOpenFunction(!mobile);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobile}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerLinks mobileOpenFunction={props.setMobileOpen} />
            {/* {props.user == "studnet" && (
              <StudentDrawer mobileOpenFunction={props.setMobileOpen} />
            )}
            {props.user == "admin" && (
              <AdminDrawer mobileOpenFunction={props.setMobileOpen} />
            )} */}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerLinks mobileOpenFunction={props.setMobileOpen} />
            {/* {props.user == "studnet" && (
              <StudentDrawer mobileOpenFunction={props.setMobileOpen} />
            )}
            {props.user == "admin" && (
              <AdminDrawer mobileOpenFunction={props.setMobileOpen} />
            )} */}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
