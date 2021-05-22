import React from "react";
import Schedule from "../../../Components/Schedule";
import Layout from "../../../Components/Layout";

import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      top: "5%",
      marginLeft: "3%",
      marginRight: "3%",
    },
  })
);

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <div className={classes.root}>
        <Schedule />
      </div>
    </Layout>
  );
};

export default index;
