import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table/Table.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";

import styles from "../assents/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardHeader color="success">
          <h4 className={classes.cardTitleWhite}>Grades</h4>
          <p className={classes.cardCategoryWhite}>Semester 1</p>
        </CardHeader>
        <CardBody>
          <Table
            tableHeaderColor="warning"
            tableHead={["ID", "Name", "Salary", "Country"]}
            tableData={[
              ["1", "Dakota Rice", "$36,738", "Niger"],
              ["2", "Minerva Hooper", "$23,789", "Curaçao"],
              ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
              ["4", "Philip Chaney", "$38,735", "Korea, South"],
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
}
