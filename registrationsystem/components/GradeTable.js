import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "2%",
    width: "100%",
    border: "1px solid black",
  },
  table: {
    minWidth: 600,
    width: "100%",
    // marginTop: "5%",
  },
  tableSmall: {
    minWidth: 80,
    // marginTop: "5%",
  },
  semester: {
    color: "rgba(6, 125, 233, 0.9110994739692753)",
    fontWeight: 900,
    textAlign: "center",
  },
});

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#292626",
    color: "#fff",
    opacity: "0.8",
  },
  body: {
    backgroundColor: "rgb(227, 226, 222,0.2)",
    color: "#292626",
    // opacity: "0.2",
  },
}))(TableCell);

const CustomTableCellSmall = withStyles((theme) => ({
  head: {
    backgroundColor: "#292626",
    color: "#fff",
    opacity: "0.8",
    width: 15,
  },
  body: {
    backgroundColor: "rgb(227, 226, 222,0.2)",
    color: "#292626",
    width: 15,
    // opacity: "0.2",
  },
}))(TableCell);

const CustomTableCellBodyHeader = withStyles((theme) => ({
  body: {
    backgroundColor: "#292626",
    color: "#fff",
    borderBottom: 0,
    opacity: "0.8",
    // opacity: "0.2",
  },
}))(TableCell);

export default function DenseTable(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography className={classes.semester}>
          Semester {props.semester}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <CustomTableCell>Course code</CustomTableCell>
                <CustomTableCell align="right">Course name</CustomTableCell>
                <CustomTableCell align="right">Credit | ECTS</CustomTableCell>
                <CustomTableCell align="right">
                  Letter Final Grade
                </CustomTableCell>
                <CustomTableCell align="right">Description</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.rows.map((row) => (
                <TableRow key={row.name}>
                  <CustomTableCell component="th" scope="row">
                    {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="right">
                    {row.calories}
                  </CustomTableCell>
                  <CustomTableCell align="right">{row.fat}</CustomTableCell>
                  <CustomTableCell align="right">{row.carbs}</CustomTableCell>
                  <CustomTableCell align="right">{row.protein}</CustomTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
