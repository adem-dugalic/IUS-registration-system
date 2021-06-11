import { makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import ApprovalTable from "../../../components/ApprovalTable";
import ClassesMain from "../../../components/ClassesMain";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    top: "3%",
    paddingLeft: "1%",
    paddingRight: "1%",
  },
}));

const Approval = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <ApprovalTable />
      </div>
    </Layout>
  );
};
export default Approval;
