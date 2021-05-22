import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CLink from "./CLink";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#292626",
  },
  linkStyle: {
    textDecorationStyle: "none",
    textDecoration: "none",
    color: "#fffff",
    fontSize: "0.9rem",
  },
}));

function RegistrationMenu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Registration
          </Typography>
          <CLink path="/student/registration">Choosen courses</CLink>
          <CLink path="/student/registration/addCourses">Add Courses</CLink>
          <CLink path="/student/schedule">Schedule</CLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default RegistrationMenu;
