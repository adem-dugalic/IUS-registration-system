import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import ContractForm from "../../../Components/ContractForm";
// import ContractPDF from "../../../Components/ContractPDF";
import dynamic from "next/dynamic";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100%",
    },
    white: {
      background: "#fff",
      margin: "auto",
    },
    form: {
      background: "#292626",
      margin: "auto",
      paddingTop: 8,
      borderRadius: 5,
      boxShadow: "-1px 2px 5px 2px rgba(0,0,0,0.44)",
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
      textAlign: "center",
    },
    text: {
      fontSize: 11,
      textAlign: "justify",
    },
    heading: {
      padding: 10,
      fontWeight: 700,
      textAlign: "center",
      color: "#fff",
    },
    topping: {
      background: "#292626",
      height: 5,
    },
    innerForm: {
      height: "100%",
      background: "#fff",
      padding: 10,
      paddingTop: 15,
    },
  })
);

const PDFViewer = dynamic(() => import("../../../components/ContractPDF"), {
  ssr: false,
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <Layout mobile={false}>
      <Grid container className={classes.root}>
        <Grid item lg={5} className={classes.form}>
          {/* <div className={classes.topping}></div> */}
          <Typography className={classes.heading}>Fill in the form</Typography>
          <div className={classes.innerForm}>
            <ContractForm />
            <Typography>
              <Typography className={classes.title}>
                Download the contract, sign your contract and mail it to
                finance@ius.edu.ba with your payment receipt.
              </Typography>
              <Grid container className={classes.demo}>
                <Typography type="body2" className={classes.text}>
                  1. If you select "in advance payment (cash)" option, you just
                  need to follow cash payment instructions and pay your tuition
                  fees to IUS account. After you deposit the money, please send
                  the payment slip to IUS Finance Office (finance@ius.edu.ba).
                </Typography>
                <Typography type="body2" className={classes.text}>
                  2. If you select "credit card" option, you need to follow it
                  up with MAIL ORDER form that needs to be sent to
                  finance@ius.edu.ba.
                </Typography>
                <Typography type="body2" className={classes.text}>
                  3. If you select "bank loan" option, please contact IUS
                  Finance Office via finance@ius.edu.ba to receive bank loan
                  form NOTE: For any other changes please contact finance office
                  via email. IMPORTANT: To avoid financial penalties, course
                  registration and student status problems, please make sure to
                  complete renewals and payments by the deadline given. If you
                  do not plan to continue upcoming academic year, you should
                  contact Student Affairs Office.
                </Typography>
              </Grid>
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6} className={classes.white}>
          <PDFViewer />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Home;
