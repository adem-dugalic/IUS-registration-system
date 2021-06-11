import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Cookies from "universal-cookie";
import Button from "@material-ui/core/Button";
import { useGetUser, useUsers } from "../services/userService";
import {
  CircularProgress,
  Grid,
  Typography,
  withStyles,
} from "@material-ui/core";

import {
  infoColor,
  blackColor,
  hexToRgb,
} from "../assents/jss/material-dashboard-react";
import { Add, Edit } from "@material-ui/icons";
import { useMutation } from "react-query";
import { httpClient } from "../utilities/httpClient";

const CustomTableHeadRow = withStyles((theme) => ({
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
}))(TableRow);

const CustomPaper = withStyles((theme) => ({
  root: {
    background: "transparent",
  },
}))(Paper);

const useStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  aboveTable: {
    position: "relative",
    background: "transparent",
    height: 50,
  },
  inner: {
    width: "20%",
    height: "100%",
  },
});

function Row(props) {
  const { row } = props;
  const cookies = new Cookies();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const mutation = useMutation((userData) =>
    httpClient.put(`/users/${row._id}`, userData)
  );

  function edit() {
    const user = {
      name: row.name,
      surname: row.surname,
      email: row.email,
      userID: row.userID,
      // password: row.password,
      faculty: row.faculty,
      program: row.program,
      isAdmin: row.isAdmin,
      isSAO: row.isSAO,
      paid: row.paid,
      isApproved: true,
    };
    mutation.mutate(user);
  }
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
          {row.userID}
        </TableCell>
        <TableCell align="right">{row.name}</TableCell>
        <TableCell align="right">{row.surname}</TableCell>
        <TableCell align="right">{row.faculty}</TableCell>
        <TableCell align="right">{row.program}</TableCell>
        {props.approved && (
          <TableCell align="right">
            <IconButton
              onClick={() => {
                edit();
              }}
            >
              <Add color={"secondary"} />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Course ID</TableCell>
                    <TableCell>Course Name</TableCell>
                    <TableCell align="right">Pre-Requisites</TableCell>
                    <TableCell align="right">ECTS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))} */}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ApprovalTable() {
  const classes = useStyles();
  const [clicked, setClicked] = React.useState(false);
  const { data: mrUser, status, refetch } = useUsers();
  if (status !== "success" && mrUser === undefined) {
    return (
      <CircularProgress
        style={{ position: "relative", left: "50%", top: "50%" }}
      />
    );
  }

  const click = (e) => {
    setClicked(e);
  };

  console.log(mrUser);
  return (
    // <TableContainer component={Paper} style={{ bkacground: "transparent" }}>
    <CustomPaper style={{ bkacground: "transparent" }}>
      <div className={classes.aboveTable}>
        <div className={classes.inner}>
          <Grid container>
            <Grid item xs={6}>
              {!clicked ? (
                <Button variant="contained" color="primary" disabled>
                  Pending
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    click(false);
                  }}
                >
                  Pending
                </Button>
              )}
            </Grid>
            <Grid item xs={6}>
              {clicked ? (
                <Button variant="contained" color="secondary" disabled>
                  Approved
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    click(true);
                  }}
                >
                  Approved
                </Button>
              )}
            </Grid>
          </Grid>
        </div>
      </div>
      <Table aria-label="collapsible table" style={{ background: "#fff" }}>
        <TableHead>
          <CustomTableHeadRow>
            <TableCell />
            <TableCell>Student ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Faculty</TableCell>
            <TableCell align="right">Program</TableCell>
            {!clicked && <TableCell align="right">Aprove</TableCell>}
          </CustomTableHeadRow>
        </TableHead>
        <TableBody>
          {mrUser.data.map(
            (row) =>
              clicked &&
              row.isApproved &&
              row.isAdmin === false &&
              row.isSAO === false && <Row key={row.userID} row={row} />
          )}
          {mrUser.data.map(
            (row) =>
              !clicked &&
              !row.isApproved &&
              row.isAdmin === false &&
              row.isSAO === false && (
                <Row key={row.userID} row={row} approved={true} />
              )
          )}
        </TableBody>
      </Table>
    </CustomPaper>
    // </TableContainer>
  );
}
