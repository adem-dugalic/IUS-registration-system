import React from "react";
import classNames from "classnames";
import Link from "next/link";
import { useCookies } from "react-cookie";
// @material-ui/core components
import {
  MuiThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import { useRouter } from "next/router";
import AdminNavbarLinks from "./Navbars/AdminNavbarLinks.js";
import styles from "../assents/jss/material-dashboard-react/components/sidebarStyle.js";
import { useGetUser } from "../services/userService.js";
import { useSession } from "../services/userService.js";
import Cookies from "universal-cookie";
import { Unarchive } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useQuery } from "react-query";
import { httpClient } from "../utilities/httpClient.js";

const useStyles = makeStyles(styles);
const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      // Name of the component ⚛️ / style sheet
      docked: {
        height: "100%",
      },
    },
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  let location = useRouter();
  const user = props.user;
  // if (!user) {
  //   return null;
  // }
  const cookies = new Cookies();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return location.pathname === routeName;
  }

  function check() {
    httpClient.get(`/authentication/logout/${cookies.get("userId")}`);
    cookies.remove(["token", "userId", "isAdmin", "isSAO"]);
    console.log(status);
    location.push("/");
  }
  const { color, logoText, routes } = props;
  var links = (
    <List className={classes.list}>
      {routes.map((prop, key) => {
        var activePro = " ";
        var listItemClasses;
        if (prop.path === "/LogOut") {
          activePro = classes.activePro + " ";
          listItemClasses = classNames({
            [" " + classes[color]]: true,
          });
        } else {
          listItemClasses = classNames({
            [" " + classes[color]]: activeRoute(prop.path),
          });
        }
        const whiteFontClasses = classNames({
          [" " + classes.whiteFont]: activeRoute(prop.path),
        });
        if (activeRoute(prop.path)) props.setCurPage(prop.name);
        return (
          <Link
            href={prop.path}
            className={activePro + classes.item}
            activeClassName="active"
            key={key}
          >
            <ListItem button className={classes.itemLink + listItemClasses}>
              {typeof prop.icon === "string" ? (
                <Icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                >
                  {prop.icon}
                </Icon>
              ) : (
                <prop.icon
                  className={classNames(classes.itemIcon, whiteFontClasses)}
                />
              )}
              <ListItemText
                primary={props.rtlActive ? prop.rtlName : prop.name}
                className={classNames(classes.itemText, whiteFontClasses)}
                disableTypography={true}
              />
            </ListItem>
          </Link>
        );
      })}

      <ListItem
        button
        style={{ position: "absolute", bottom: 10, width: "87%" }}
        className={
          classes.itemLink +
          classNames({
            [" " + classes[color]]: true,
          })
        }
      >
        <Button
          href=""
          className={classes.item}
          style={{ width: "100%", textAlign: "left", padding: 0 }}
          activeClassName="active"
          onClick={() => {
            check();
          }}
        >
          <Icon className={classNames(classes.itemIcon, classes.whiteFont)}>
            <Unarchive />
          </Icon>
          <ListItemText
            primary={props.rtlActive ? prop.rtlName : "Log Out"}
            className={classNames(classes.itemText, classes.whiteFont)}
            disableTypography={true}
          />
        </Button>
      </ListItem>
    </List>
  );
  var brand = (
    <div className={classes.logo}>
      <a
        href="https://www.ius.edu.ba"
        className={classes.logoLink}
        target="_blank"
      >
        <div className={classes.logoImage}>
          <img src="/IUSlogo2.png" alt="logo" className={classes.img} />
        </div>
        {user !== undefined && user.data.name + " " + user.data.surname}
      </a>
    </div>
  );
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ height: "100%" }}>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={props.rtlActive ? "left" : "right"}
            open={props.open}
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
            onClose={props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>
              <AdminNavbarLinks />
              {links}
            </div>
            {/*  */}
            <div
              className={classes.background}
              style={{ backgroundImage: "url(/ius2.jpg)" }}
            />
            {/*  */}
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <Drawer
            anchor={props.rtlActive ? "right" : "left"}
            variant="permanent"
            open
            classes={{
              paper: classNames(classes.drawerPaper),
            }}
          >
            {brand}
            <div className={classes.sidebarWrapper}>{links}</div>
            <div
              className={classes.background}
              style={{ backgroundImage: "url(/ius2.jpg)" }}
            />
          </Drawer>
        </Hidden>
      </div>
    </MuiThemeProvider>
  );
}
