import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Checkbox } from "@material-ui/core";
import { useCourses } from "../services/courseService";
import Cookies from "universal-cookie";
import {
  infoColor,
  blackColor,
  hexToRgb,
} from "../assents/jss/material-dashboard-react";
import { AddCircle } from "@material-ui/icons";
import { useMutation } from "react-query";
import { httpClient } from "../utilities/httpClient";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const CustomTableCellEmpty = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
    width: 20,
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#fff",
    color: "#fff",
  },
  // body: {
  //   fontSize: 14,
  // },
}))(TableCell);

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: "2020-01-05", customerId: "11091700", amount: 3 },
      { date: "2020-01-02", customerId: "Anonymous", amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  console.log(props.courses);
  const classes = useRowStyles();
  const cookies = new Cookies();
  const mutation = useMutation(
    (pay) => httpClient.post(`/userCourse/${cookies.get("userId")}`, pay),
    {
      onSuccess: () => {},
    }
  );

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
        <TableCell align="right"></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {/* <Typography variant="h6" gutterBottom component="div">
                History
              </Typography> */}
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        // indeterminate={numSelected > 0 && numSelected < rowCount}
                        // checked={rowCount > 0 && numSelected === rowCount}
                        // onChange={onSelectAllClick}
                        inputProps={{ "aria-label": "select all desserts" }}
                      />
                    </TableCell>
                    <TableCell>Course ID</TableCell>
                    <TableCell>Course Name</TableCell>
                    <TableCell align="right">Lecturer</TableCell>
                    <TableCell align="right">Prerequisites</TableCell>
                    <TableCell align="right">Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {props.courses &&
                    props.courses.data.map(
                      (historyRow, index) =>
                        !(index > 5) && (
                          <TableRow key={historyRow.date}>
                            <TableCell padding="checkbox">
                              {/* <Checkbox
                                // indeterminate={numSelected > 0 && numSelected < rowCount}
                                // checked={rowCount > 0 && numSelected === rowCount}
                                // onChange={onSelectAllClick}
                                inputProps={{
                                  "aria-label": "select all desserts",
                                }}
                              /> */}
                            </TableCell>
                            <TableCell component="th" scope="row">
                              {historyRow.course_id}
                            </TableCell>
                            <TableCell>{historyRow.course_name}</TableCell>
                            <TableCell align="right">
                              {historyRow.Lecturer}
                            </TableCell>
                            <TableCell align="right">
                              {historyRow.prerequisite}
                            </TableCell>
                            <TableCell align="right">
                              <IconButton
                                onClick={() => {
                                  mutation.mutate({ courseId: historyRow._id });
                                }}
                              >
                                <AddCircle />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        )
                    )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    // calories: PropTypes.number.isRequired,
    // carbs: PropTypes.number.isRequired,
    // fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    // price: PropTypes.number.isRequired,
    // protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Mandatory"),
  createData("Free elective"),
  createData("Faculty elective"),
  createData("Program Elective"),
];

export default function CollapsibleTable() {
  const { data: courses, status, refetch } = useCourses();
  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: "#292626",
        position: "relative",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead style={{ position: "sticky", top: 0 }}>
          <TableRow style={{ height: 1 }}>
            <CustomTableCellEmpty />
            <CustomTableCell align="left"></CustomTableCell>
            <CustomTableCell align="left" />
            <CustomTableCell align="left" />
            <CustomTableCell align="left" />
            <CustomTableCell align="left" />
          </TableRow>
        </TableHead>
        <TableBody style={{ backgroundColor: "#fff" }}>
          {rows.map((row) => (
            <Row key={row.name} row={row} courses={courses} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
