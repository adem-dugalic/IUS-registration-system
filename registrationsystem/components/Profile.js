import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon, Typography } from "@material-ui/core";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
import { Warning } from "@material-ui/icons";
import { grayColor } from "../assents/jss/material-dashboard-react";
import {
  infoColor,
  blackColor,
  hexToRgb,
} from "../assents/jss/material-dashboard-react";

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

function Profile(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <Grid container>
            <Grid item xs={1}>
              {" "}
              <div className={classes.image}>
                <img src={"/profile.jpg"} width={100} height={"auto"} />
              </div>
            </Grid>
            <Grid item xs={11}>
              <Grid
                container
                alignItems="center"
                justify="center"
                alignContent="center"
                className={classes.generalInfo}
              >
                <Grid item xs={2}></Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>
                    Name:{" "}
                    {props.currentUser.data.name +
                      " " +
                      props.currentUser.data.surname}
                  </Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>Advisor: Someone</Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>
                    Faculty: {props.currentUser.data.faculty}
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>Id: {props.currentUser.data.userID}</Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>Courses: 5</Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>
                    Program: {props.currentUser.data.program}
                  </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>Email: {props.currentUser.data.email}</Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>Points: 120</Typography>
                </Grid>
                <Grid item xs={3} className={classes.centered}>
                  <Typography>CGPA: 4.0</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
              <img src={"/profile.jpg"} width={100} height={"auto"} />
            </CardIcon>
          </CardHeader>
          <CardBody></CardBody>
          <CardFooter stats>
            <div className={classes.stats}></div>
          </CardFooter> */}
          <CardFooter stats className={classes.stats}>
            <div className={classes.stats}></div>
          </CardFooter>
        </Card>
      </Grid>
      {/* <Grid item sx={9}>
      </Grid> */}
      <Grid item xs={12}>
        <div></div>
      </Grid>
    </Grid>
  );
}

export default Profile;
