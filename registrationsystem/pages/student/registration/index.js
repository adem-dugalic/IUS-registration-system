import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import Profile from "../../../Components/Profile";
import TakenCourses from "../../../Components/TakenCourses";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Cookies from "universal-cookie";
import { useGetUser } from "../../../services/userService";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      flexGrow: 1,
      top: "5%",
      marginLeft: "3%",
      marginRight: "3%",
    },
    rootGrid: {
      position: "relative",
      // height: "95%",
      // width: "95%",
      backgroundColor: "transparent",
    },
    semensterInfo: {
      position: "relative",
    },
    choosenCourses: {
      position: "relative",
    },
    table: {
      minWidth: 650,
    },
    centered: {
      textAlign: "justify",
    },
  })
);

const index = () => {
  const classes = useStyles();
  const cookies = new Cookies();
  const { data: mrUser, status, refetch } = useGetUser(cookies.get("userId"));
  if (status !== "success" && mrUser === undefined) {
    return null;
  }

  return (
    <Layout mobile={true}>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.rootGrid}>
          <Grid item xs={12} className={classes.semensterInfo}>
            <Profile currentUser={mrUser} />
          </Grid>
          <Grid item xs={12} className={classes.choosenCourses}>
            {/* <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Course ID</TableCell>
                  <TableCell align="right">Course name</TableCell>
                  <TableCell align="right">Professor</TableCell>
                  <TableCell align="right">Pre-requisites</TableCell>
                  <TableCell align="right">ECTS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table> */}
            <TakenCourses />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default index;
