import React, { useState } from "react";
import Layout from "../../Components/Layout";
import RegistrationMenu from "../../Components/RegistrationMenu";
import { createStyles, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  })
);

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <Typography>INTERNATIONAL UNIVERSITY OF SARAJEVO</Typography>
      <Typography>Student Success Report</Typography>
    </Layout>
  );
};

export default index;
