import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { blackColor } from "../assents/jss/material-dashboard-react";
import { blue } from "@material-ui/core/colors";
import { useMutation } from "react-query";
import { httpClient } from "../utilities/httpClient";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { set } from "mongoose";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.ius.edu.ba/">
        IUS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const CssTextField = withStyles({
  root: {
    color: "#fff",
    // "& label.Mui-focused": {
    //   color: "blue",
    // },
    // "& .MuiInput-underline:after": {
    //   borderBottomColor: "blue",
    // },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
    },
    //   "&:hover fieldset": {
    //     borderColor: "blue",
    //   },
    //   "&.Mui-focused fieldset": {
    //     borderColor: "blue",
    //   },
    // },
  },
})(TextField);

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "#fff",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "#fff",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "100%",
    backgroundColor: "#ffffff",
    backgroundImage: "url(/banner1.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  rightLogin: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    height: "80%",
    marginTop: "5%",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: 10,
      paddintTop: 200,
    },
  },
  paper: {
    position: "relative",
    zIndex: 2,
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    repeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: blackColor,
      opacity: ".8",
    },
  },
  textStyle: {
    color: "#fff",
  },
}));

export default function Activation() {
  const classes = useStyles();
  const router = useRouter();
  const [userID, setUserID] = useState("");
  const { register, handleSubmit } = useForm();
  const cookies = new Cookies();
  // const [mutate, { data, error }] = useCreateUser();
  const mutation = useMutation(
    async (userData) => {
      const res = await httpClient.post("/authentication/signup", userData);
      return res;
    },
    {
      onSuccess(res) {
        console.log(res);
        router.push("/authentication/login");
      },
      //We can use this option to refetch for any number og miliseconds
      //But keep in mind that it will refetch non stop in that set interval
      //refetchInterval: 1000,
    }
  );

  const onSubmit = (data) => {
    const someone = {
      userID: data.id,
      password: data.password,
    };
    console.log(someone);
    mutation.mutate(someone);
  };

  return (
    <Grid container className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid item xs={0} sm={2} md={4}></Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={4}
        className={classes.rightLogin}
        component={Paper}
        // elevation={6}
        square
      >
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Activation
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="id"
              label="User ID"
              name="id"
              autoComplete="email"
              autoFocus
              inputRef={register}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <CssTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              color={"primary"}
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={register}
              autoComplete="current-password"
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              InputProps={{
                style: { color: "#fff" },
              }}
            />
            <Button
              //type="submit"
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              className={classes.submit}
              // onClick={() => router.push("/student/home")}
            >
              Activate
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
        <div
          className={classes.background}
          style={{ backgroundImage: "url(/ius2.jpg)" }}
        />
      </Grid>
      <Grid item xs={0} sm={2} md={4}></Grid>
    </Grid>
  );
}
