import React, { useState } from "react";
import Layout from "../../Components/Layout";
import CourseTable from "../../Components/CourseTable";
import RegistrationMenu from "../../Components/RegistrationMenu";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      top: "10%",
      marginLeft: "3%",
      marginRight: "3%",
    },
  })
);

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <RegistrationMenu />
      <div className={classes.root}>
        <CourseTable />
      </div>
    </Layout>
  );
};

export default index;
