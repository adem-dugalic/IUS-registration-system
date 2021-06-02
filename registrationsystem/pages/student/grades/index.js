import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import GradeTable from "../../../Components/GradeTable";
import { createStyles, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      // backgroundColor: "rgb(255, 255, 255, 0.7)",
      // height: "100%",
      // paddingTop: "5%",
      // paddingBottom: "5%",
    },
    centered: {
      textAlign: "center",
    },
    gridItems: {
      marginLeft: "10%",
      marginRight: "10%",
    },
    tableDiv: {
      background: "#fff",
    },
  })
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("CS103", "Introduction to Programming", "3 | 6", "A-", 4.0),
  createData(
    "ELIT100",
    "Academic English and Effective Communication",
    "3 | 6",
    "A-",
    4.3
  ),
  createData("MATH101", "Calculus I", "3 | 6", "A-", 6.0),
  createData("NS102", "Physics", "3 | 6", "A-", 4.3),
  createData(
    "NS112",
    "Understanding Science and Technology",
    "1.5 | 3",
    "A",
    3.9
  ),
  createData("TURK111", "Spoken Turkish I", "1.5 | 3", "B-", 3.9),
];

const Grades = (props) => {
  const semester = 1;
  const classes = useStyles();
  return (
    <Layout mobile={false}>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12} className={classes.gridItems}>
          <div className={classes.tableDiv}>
            <GradeTable rows={rows} semester={semester} />
          </div>
        </Grid>
        <Grid item xs={12} className={classes.gridItems}>
          <div className={classes.tableDiv}>
            <GradeTable rows={rows} semester={semester} />
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Grades;
