import Link from "next/link";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Icon, Typography } from "@material-ui/core";
import CompleteCard from "./CompleteCard";
import Schedule from "./Schedule";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    width: "100%",
    top: "5%",
    // left: "50%",
    // marginBottom: "3%",
    // transform: "translate(-50%)",
    paddingLeft: "1%",
    paddingRight: "1%",
    overflowY: "auto",
  },
  rootLeft: {
    position: "relative",
    width: "80%",
    height: "100%",
    left: "50%",
    transform: "translate(-50%)",
    paddingBottom: "30%",
    background: "transparent",
    border: "none",
    boxShadow: "none",
    margin: 0,
  },
  img: {
    position: "relative",
    borderRadius: "3px",
    backgroundColor: "transparent",
    padding: "15px",
    marginTop: "-70px",
    marginRight: "15px",
    float: "left",
    width: "90%",
    height: "auto",
    left: "50%",
    transform: "translate(-50%)",
  },
}));

function ClassesMain(props) {
  const classes = useStyles();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            {arr.map((index) => {
              return (
                <Grid item xs={4} key={index}>
                  <CompleteCard />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.rootLeft}>
            {/* <CardHeader style={{ padding: 0 }}>
              <img src="/cal.jpg" alt="logo" className={classes.img} />
            </CardHeader> */}
            <Schedule />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClassesMain;
