import React, { useState } from "react";
import Layout from "../../../Components/Layout";
import CourseTable from "../../../Components/CourseTable";
import RegistrationMenu from "../../../Components/RegistrationMenu";
import { createStyles, makeStyles, withStyles } from "@material-ui/core";

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

const CustomTableCellEmpty = withStyles((theme) => ({
  head: {
    backgroundColor: "#292626",
    width: 20,
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#292626",
    color: "#fff",
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

const index = () => {
  const classes = useStyles();
  return (
    <Layout mobile={true}>
      <RegistrationMenu />
      <div className={classes.root}>
        <Table
          aria-label="collapsible table"
          style={{ position: "sticky", top: 0, zIndex: 10 }}
        >
          <TableHead>
            <TableRow>
              <CustomTableCellEmpty />
              <CustomTableCell align="left">Courses</CustomTableCell>
              <CustomTableCell align="left" />
              <CustomTableCell align="left" />
              <CustomTableCell align="left" />
              <CustomTableCell align="left" />
            </TableRow>
          </TableHead>
        </Table>
        <CourseTable />
      </div>
    </Layout>
  );
};

export default index;
