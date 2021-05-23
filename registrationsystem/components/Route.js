import Link from "next/link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  size: {
    fontSize: "0.5em",
  },
  link: {
    textDecorationStyle: "none",
    textDecoration: "none",
    color: "#fffff",
  },
}));

function Route(props) {
  const classes = useStyles();
  return (
    <ListItem button key={props.keyee} className={classes.size}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <Link
        className={classes.link}
        href={props.href}
        onClick={() => props.mobileOpenFunction(false)}
      >
        <ListItemText primary={props.name} />
      </Link>
    </ListItem>
  );
}

export default Route;
