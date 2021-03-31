import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      left: "25%",
      top: "25%",
    },
  })
);

export default function Welcome() {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.root}>
      WELCOME TO IUS PRE-REGISTRATION SYSTEM
    </Typography>
  );
}
