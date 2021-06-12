import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import TranscriptTable from "../../../Components/TranscriptTable";
import TranscriptLayout from "../../../Components/TranscriptLayout";
import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "rgb(255, 255, 255, 0.8)",
      height: "100%",
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingRight: "2%",
      paddingLeft: "2%",
    },
    centered: {
      textAlign: "center",
      fontWeight: 900,
    },
    generalInfo: {
      marginTop: "5%",
      marginBottom: "5%",
    },
    gridItems: {
      paddingLeft: "10%",
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

const rows2 = [
  createData("Taken Credit", "15 | 30", "15 | 30"),
  createData("Completed Credit", "15 | 30", "15 | 30"),
  createData("CGPA", "3.35", "3.35"),
];

const index = () => {
  const semester = 1;
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <TranscriptLayout>
        <div className={classes.root}>
          {/* <div className={classes.container}> */}
          <Typography variant="h5" className={classes.centered}>
            INTERNATIONAL UNIVERSITY OF SARAJEVO
          </Typography>
          <Typography variant="h5" className={classes.centered}>
            Student Success Report
          </Typography>

          <Grid container className={classes.generalInfo}>
            <Grid item lg={6} className={classes.gridItems}>
              <Typography>JMBG : 2606998190013 </Typography>

              <Typography>Student No : 170302071 </Typography>

              <Typography> Name : Dzonvick </Typography>

              <Typography> Surname : Šejla</Typography>

              <Typography>Registration Date : 9/18/2017 </Typography>
            </Grid>
            <Grid item lg={6} className={classes.gridItems}>
              <Typography>
                {" "}
                Faculty : Faculty of Engineering and Natural Sciences{" "}
              </Typography>
              <Typography>Department : Department of Engineering </Typography>
              <Typography> Education Level : I Cycle (Bachelor)</Typography>
              <Typography>
                Program : Computer Sciences and Engineering (Bachelor){" "}
              </Typography>
              <Typography> Graduation Date :</Typography>
            </Grid>
          </Grid>

          <TranscriptTable rows={rows} semester={semester} rows2={rows2} />
          <TranscriptTable rows={rows} semester={semester} rows2={rows2} />
          <TranscriptTable rows={rows} semester={semester} rows2={rows2} />
          <TranscriptTable rows={rows} semester={semester} rows2={rows2} />
          <TranscriptTable rows={rows} semester={semester} rows2={rows2} />
        </div>
      </TranscriptLayout>
    </Layout>
  );
};

export default index;
