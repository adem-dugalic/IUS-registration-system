import React from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExitToApp from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddCircle from "@material-ui/icons/AddCircle";
import Home from "@material-ui/icons/Home";
import Grade from "@material-ui/icons/Grade";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Link from "next/link";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    maximised: {
      height: "100%",
      position: "relative",
    },
    toolbar: theme.mixins.toolbar,
    specialDivider: {
      marginTop: "5%",
      background: "#999",
    },
    blueGrad: {
      background:
        "linear-gradient(90deg, rgba(6, 125, 233, 0.9110994739692753) 0%, rgba(1, 169, 250, 0.9251050762101716) 100%)",
      height: "20%",
    },
    iconColor: {
      color: "#fff",
    },
    ius: {
      left: "35%",
      position: "relative",
      width: 60,
      height: "auto",
    },
    logo: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      top: "25%",
      textAlign: "center",
    },
    link: {
      textDecorationStyle: "none",
      textDecoration: "none",
      color: "#fffff",
    },
    user: {
      fontSize: "0.9em",
      //font-family: "Montserrat", sans-serif,
      textTransform: "uppercase",
    },
    size: {
      fontSize: "0.5em",
    },
    drawerInnerLayout: {
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      height: "80%",
    },
  })
);

const UserDrawer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.maximised}>
      <div className={classes.blueGrad}>
        <div className={classes.logo}>
          <img className={classes.ius} src="/IUSlogo2.png" />
          <span
            className="user"
            // dangerouslySetInnerHTML={{
            //   __html: Cookie.get("name") + " " + Cookie.get("surname"),
            // }}
          >
            USername
          </span>
        </div>
        <div className={classes.toolbar} />
      </div>
      <div className={classes.drawerInnerLayout}>
        <div>
          <Divider />
          <List>
            {/*Home*/}
            <ListItem button key="Home" className={classes.size}>
              <ListItemIcon>
                <Home className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/home"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Home" />
              </Link>
            </ListItem>
            <ListItem button key="Grades" className={classes.size}>
              <ListItemIcon>
                <Grade className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/grades"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Grades" />
              </Link>
            </ListItem>
            {/*Add Courses*/}
            <ListItem button key="Registration">
              <ListItemIcon>
                <AddCircle className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/registration"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Registration" />
              </Link>
            </ListItem>
            {/*My Courses*/}
            <ListItem button key="Transcript">
              <ListItemIcon>
                <InboxIcon className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/transcript"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Transcript" />
              </Link>
            </ListItem>
            <ListItem button key="Contract and payment">
              <ListItemIcon>
                <AccountBalanceIcon className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/contract"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Contract and payment" />
              </Link>
            </ListItem>
            {/*Schedule*/}
            <ListItem button key="Schedule">
              <ListItemIcon>
                <ScheduleIcon className={classes.iconColor} />
              </ListItemIcon>
              <Link
                className={classes.link}
                href="/student/schedule"
                onClick={() => props.mobileOpenFunction(false)}
              >
                <ListItemText primary="Schedule" />
              </Link>
            </ListItem>
          </List>
        </div>
        <div>
          <Divider className={classes.specialDivider} />
          <List>
            <ListItem button key="LogOut">
              <ListItemIcon>
                <ExitToApp className={classes.iconColor} />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default UserDrawer;
