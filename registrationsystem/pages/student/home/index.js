import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";
import Notifications from "../../../Components/Notifications/Notifications";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      overflowY: "auto",
      height: "100%",
    },
    notification: {
      marginBottom: "5%",
    },
  })
);

const Home = (props) => {
  const classes = useStyles();
  return (
    <Layout mobile={false}>
      <div className={classes.root}>
        <Welcome panel={"Student"} />
        <div className={classes.notification}>
          <Notifications />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
