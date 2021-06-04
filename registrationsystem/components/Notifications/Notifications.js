/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import Button from "../CustomButtons/Button.js";
import SnackbarContent from "../Snackbar/SnackbarContent.js";
import Snackbar from "../Snackbar/Snackbar.js";
import Card from "../Card/Card.js";
import CardHeader from "../Card/CardHeader.js";
import CardBody from "../Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function Notifications() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <h5>Notifications Style</h5>
        <br />
        <SnackbarContent message={"This is a plain notification"} />
        <SnackbarContent
          message={"This is a notification with close button."}
          close
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
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
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
      </GridItem>
    </GridContainer>
  );
}
