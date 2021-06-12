import {
  Button,
  CircularProgress,
  createStyles,
  CssBaseline,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardBody from "./Card/CardBody";
import CardHeader from "./Card/CardHeader";
import Card from "./Card/Card.js";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../services/userService";
import { useMutation } from "react-query";
import { httpClient } from "../utilities/httpClient";
import { useRouter } from "next/router";
import { useGetCourse } from "../services/courseService";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      width: "90%",
      top: "5%",
      left: "50%",
      marginBottom: "3%",
      transform: "translate(-50%)",
      overflowY: "auto",
    },
  })
);

function EditCourse(props) {
  const classes = useStyles();
  const router = useRouter();
  const [faculty, setFaculty] = useState("");
  const [program, setProgram] = useState("");
  const { register, handleSubmit } = useForm();
  // const [mutate, { data, error }] = useCreateUser();
  const { data: course, status, refetch } = useGetCourse(router.query.id);
  const mutation = useMutation((courseData) =>
    httpClient.put(`/courses/${router.query.id}`, courseData)
  );

  if (status !== "success" && course === undefined) {
    return (
      <CircularProgress
        style={{ position: "relative", left: "50%", top: "50%" }}
      />
    );
  }
  const handleChange = (event) => {
    setFaculty(event.target.value);
  };
  const handleChangeP = (event) => {
    setProgram(event.target.value);
  };

  const onSubmit = (data) => {
    const someCourse = {
      course_id: data.courseID,
      course_name: data.courseName,
      Lecturer: data.lecturer,
      AcademicUnit: data.academicUnit,
      prerequisite: data.preReq,
      // UpdatedDate: ,
      Url: course.data.Url,
    };
    console.log(someCourse);
    // await mutate(someone);
    mutation.mutate(someCourse);
    router.push("/admin/courses");
  };

  return (
    <Card>
      <CssBaseline />
      <CardHeader color="warning">
        <Typography variant="h5" align="center" gutterBottom>
          Edit {course.data.course_name}
        </Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid
            container
            alignItems="flex-start"
            spacing={2}
            className={classes.root}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                defaultValue={course.data.course_id}
                name="courseID"
                type="text"
                label="Course ID"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                required
                defaultValue={course.data.course_name}
                name="courseName"
                type="text"
                label="Course Name"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="lecturer"
                fullWidth
                required
                defaultValue={course.data.lecturer}
                type="text"
                label="Lecturer"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="academicUnit"
                fullWidth
                required
                defaultValue={course.data.AcademicUnit}
                type="ID"
                label="Academic Unit"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="preReq"
                defaultValue={course.data.prerequisite}
                label="Pre-Requisites"
                inputRef={register}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth name="url" label="URL" inputRef={register} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select faculty</InputLabel>
                <Select name="faculty" onChange={handleChange}>
                  <MenuItem value="FENS">FENS</MenuItem>
                  <MenuItem value="FBA">FBA</MenuItem>
                  <MenuItem value="FASS">FASS</MenuItem>
                  <MenuItem value="FE">FE</MenuItem>
                  <MenuItem value="FL">FL</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item style={{ marginTop: 16 }}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardBody>
    </Card>
  );
}
export default EditCourse;
