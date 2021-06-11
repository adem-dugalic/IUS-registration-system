import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table/Table.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import Cookies from "universal-cookie";

import styles from "../assents/jss/material-dashboard-react/views/dashboardStyle.js";
import { useGetUserCourses } from "../services/userService.js";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function TakenCourses() {
  const classes = useStyles();
  const cookies = new Cookies();
  const {
    data: userCourse,
    status,
    refetch,
  } = useGetUserCourses(cookies.get("userId"));
  if (status !== "success" && userCourse === undefined) {
    return (
      <CircularProgress
        style={{ position: "relative", left: "50%", top: "50%" }}
      />
    );
  }
  return (
    <div>
      <Card>
        <CardHeader color="info">
          <h4 className={classes.cardTitleWhite}>Student Courses</h4>
          <p className={classes.cardCategoryWhite}>As of October 1st. 2021</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={[
              "Course ID",
              "Course Name",
              "Professor",
              "Pre-Requisites",
              "Option",
            ]}
            tableData={userCourse.datas}
          />
        </CardBody>
      </Card>
    </div>
  );
}
