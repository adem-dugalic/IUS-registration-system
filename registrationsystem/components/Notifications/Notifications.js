/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import SnackbarContent from "../Snackbar/SnackbarContent.js";
import { Grid, Typography } from "@material-ui/core";

const styles = {
  homeGrid: {
    position: "relative",
    width: "90%",
    left: "50%",
    transform: "translate(-50%)",
  },
  activity: {
    textAlign: "center",
    padding: 20,
  },
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  return (
    <Grid container className={classes.homeGrid}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography className={classes.activity}>
          Recent News and Actvity
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <SnackbarContent
          message={
            'INFO - This is a regular notification made with color="info"'
          }
          close
          color="info"
        />
        <SnackbarContent
          message={
            'SUCCESS - This is a regular notification made with color="success"'
          }
          close
          color="success"
        />
        <SnackbarContent
          message={
            'WARNING - This is a regular notification made with color="warning"'
          }
          close
          color="warning"
        />
        <SnackbarContent
          message={"This is a notification with close button and icon."}
          close
          icon={AddAlert}
        />
        <SnackbarContent
          message={
            "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
          }
          close
          icon={AddAlert}
        />
      </Grid>
      {/* <GridItem xs={12} sm={12} md={6}>
        <h5>Notifications States</h5>
        <br />
        <SnackbarContent
          message={
            'INFO - This is a regular notification made with color="info"'
          }
          close
          color="info"
        />
        <SnackbarContent
          message={
            'SUCCESS - This is a regular notification made with color="success"'
          }
          close
          color="success"
        />
        <SnackbarContent
          message={
            'WARNING - This is a regular notification made with color="warning"'
          }
          close
          color="warning"
        />
        <SnackbarContent
          message={
            'DANGER - This is a regular notification made with color="danger"'
          }
          close
          color="danger"
        />
        <SnackbarContent
          message={
            'PRIMARY - This is a regular notification made with color="primary"'
          }
          close
          color="primary"
        />
      </GridItem> */}
    </Grid>
  );
}
