import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
      backgroundColor: "#fff",
      marginBottom: "10%",
    },
    choosenCourses: {
      position: "relative",
      backgroundColor: "#fff",
    },
    table: {
      minWidth: 650,
    },
    centered: {
      textAlign: "justify",
    },
  })
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.rootGrid}>
          <Grid item xs={12} className={classes.semensterInfo}>
            <Grid
              container
              alignItems="center"
              justify="center"
              alignContent="center"
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Name: Adem Dugalić</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Advisor: Someone</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Faculty: CS</Typography>
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Id: 170302071</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Courses: 5</Typography>
              </Grid>
              <Grid item xs={3} className={classes.centered}>
                <Typography>Points: 120</Typography>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.choosenCourses}>
            <Table className={classes.table} aria-label="simple table">
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
            </Table>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default index;
