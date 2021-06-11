import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import ClassesMain from "../../../components/ClassesMain";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Classes = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <ClassesMain />
    </Layout>
  );
};
export default Classes;
