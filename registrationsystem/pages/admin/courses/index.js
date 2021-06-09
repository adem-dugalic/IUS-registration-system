import React from "react";
import { useState } from "react";
import AllCourses from "../../../Components/AllCourses";
import Profile from "../../../Components/Profile";
import ProfileCourses from "../../../Components/ProfileCourses";
import ProfileGrades from "../../../Components/ProfileGrades";
import Layout from "../../../Components/Layout";
import AdminCourses from "../../../Components/AdminCourses";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      top: "5%",
      overflowY: "auto",
      maxHeight: "100vh",
    },
    innerRoot: {
      position: "relative",
      width: "90%",
      top: "5%",
      left: "50%",
      marginBottom: "10%",
      transform: "translate(-50%)",
    },
  })
);

const Courses = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        {/* <div className={classes.innerRoot}>
          <Profile />
          <ProfileCourses />
          <ProfileGrades />
        </div> */}
        <AdminCourses />
      </div>
    </Layout>
  );
};
export default Courses;
