import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Welcome panel={"Professor"} />
    </Layout>
  );
};
export default Home;
