import React from "react";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      position: "relative",
      left: "50%",
      transform: "translate(-50%)",
      marginTop: "5%",
      padding: 20,
    },
    typ: {
      textAlign: "center",
    },
  })
);

export default function Welcome(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.typ}>
        IUS Registration system
      </Typography>
      <Typography variant="h4" className={classes.typ}>
        {props.panel} panel
      </Typography>
    </div>
  );
}
