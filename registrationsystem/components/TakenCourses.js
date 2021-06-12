import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import Cookies from "universal-cookie";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import styles from "../assents/jss/material-dashboard-react/views/dashboardStyle.js";
import { useGetUserCourses } from "../services/courseService.js";
import { CircularProgress } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TakenCourses() {
  const classes = useStyles();
  const cookies = new Cookies();
  const {
    data: userCourse,
    status,
    refetch,
  } = useGetUserCourses(cookies.get("userId"));
  React.useEffect(() => {
    if (status !== "success" && userCourse) {
      return (
        <CircularProgress
          style={{ position: "relative", left: "50%", top: "50%" }}
        />
      );
    }
    console.log(userCourse);
  }, [userCourse]);

  return (
    <div>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Student Courses</h4>
          <p className={classes.cardCategoryWhite}>As of October 1st. 2021</p>
        </CardHeader>
        <CardBody>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Course ID</TableCell>
                <TableCell align="right">Course Name</TableCell>
                <TableCell align="right">Professor</TableCell>
                <TableCell align="right">Pre-Requisites</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userCourse &&
                userCourse[0].information.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.course_id}
                    </TableCell>
                    <TableCell align="right">{row.course_name}</TableCell>
                    <TableCell align="right">{row.Lecturer}</TableCell>
                    <TableCell align="right">{row.prerequisite}</TableCell>
                    <TableCell align="right">
                      <Delete />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
