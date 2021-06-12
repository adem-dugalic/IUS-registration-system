import Link from "next/link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import CardHeader from "./Card/CardHeader";
import CardIcon from "./Card/CardIcon";
import Card from "./Card/Card.js";
import { Icon, Typography } from "@material-ui/core";
import {
  infoColor,
  blackColor,
  hexToRgb,
  grayColor,
} from "../assents/jss/material-dashboard-react";
import { Book, ImportContacts, Person } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "80%",
    top: "5%",
    left: "50%",
    marginBottom: "3%",
    transform: "translate(-50%)",
  },
  stats: {
    backgroundColor: infoColor[0],
    margin: 0,
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.2)",
    },
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  image: {
    borderRadius: "3px",
    backgroundColor: "transparent",
    padding: "15px",
    marginTop: "-40px",
    marginRight: "15px",
    float: "left",
  },
  generalInfo: {
    marginTop: "2%",
  },
}));

function CompleteCard(props) {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
          <ImportContacts />
        </CardIcon>
        <p className={classes.cardCategory}>Course</p>
        <h3 className={classes.cardTitle}>AA103</h3>
      </CardHeader>
      <CardFooter stats>
        <Typography>Architecture design</Typography>
      </CardFooter>
    </Card>
  );
}

export default CompleteCard;
