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
    backgroundColor: "#ffffff",
    height: "100%",
  },
  image: {
    position: "relative",
    backgroundImage: "url(/longlogo.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#ffffff",
    //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  rightLogin: {
    position: "relative",
    zIndex: 2,
    color: "#fff",
    backgroundColor: "transparent",
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

export default function Login() {
  const classes = useStyles();
  const router = useRouter();
  const [userID, setUserID] = useState("");
  const { register, handleSubmit } = useForm();
  // const [mutate, { data, error }] = useCreateUser();
  const mutation = useMutation(
    async (userData) => {
      const res = await httpClient.post("/authentication/login", userData);
      return res;
    },
    {
      onSuccess(res) {
        setUserID(res.data.userId);
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
    // await mutate(someone);
    const bes = mutation.mutate(someone);
    //console.log(bes);
    //router.push("/student/home")
    //console.log(userID);
  };

  return (
    <Grid container component="main" className={classes.root}>
      {/* <CssBaseline /> */}
      <Grid item xs={false} sm={3} md={6} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className={classes.rightLogin}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Login
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked />}
              label="Remember me"
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
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
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
    </Grid>
  );
}
