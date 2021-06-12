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
import { useGetUser, useUsers } from "../services/userService";
import { CircularProgress, Typography } from "@material-ui/core";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

export default function ApprovalTable() {
  const cookies = new Cookies();
  const { data: mrUser, status, refetch } = useUsers();
  if (status !== "success" && mrUser === undefined) {
    return (
      <CircularProgress
        style={{ position: "relative", left: "50%", top: "50%" }}
      />
    );
  }
  console.log(mrUser);
  return (
    <TableBody>
      {row.history.map((historyRow) => (
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
      ))}
    </TableBody>
  );
}
