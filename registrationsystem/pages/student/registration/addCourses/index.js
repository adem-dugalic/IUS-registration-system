import React, { useState } from "react";
import Layout from "../../../../Components/Layout";
import CourseTable from "../../../../Components/CourseTable";
import { createStyles, makeStyles, withStyles } from "@material-ui/core";
import {
  infoColor,
  blackColor,
  hexToRgb,
} from "../../../../assents/jss/material-dashboard-react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      maxHeight: "80%",
      overflowY: "auto",
      top: "8%",
      marginLeft: "3%",
      marginRight: "3%",
    },
  })
);

const CustomTableRow = withStyles((theme) => ({
  head: {
    backgroundColor: infoColor[0],
    boxShadow:
      "0 12px 20px -10px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.28), 0 4px 20px 0 rgba(" +
      hexToRgb(blackColor) +
      ",.12), 0 7px 8px -5px rgba(" +
      hexToRgb(infoColor[0]) +
      ",.2)",
    "&:hover,&:focus": {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 12px 20px -10px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.28), 0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.12), 0 7px 8px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.2)",
    },
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableRow);

const CustomTableCell = withStyles((theme) => ({
  head: {
    background: "transparent",
    width: 20,
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <div className={classes.root}>
        <Table
          aria-label="collapsible table"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          <TableHead>
            <CustomTableRow>
              <CustomTableCell />
              <TableCell align="left">Courses</TableCell>
              <TableCell align="left" />
              <TableCell align="left" />
              <TableCell align="left" />
              <TableCell align="left" />
            </CustomTableRow>
          </TableHead>
        </Table>
        <CourseTable />
      </div>
    </Layout>
  );
};

export default index;
