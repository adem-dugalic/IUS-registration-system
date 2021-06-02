import React from "react";
import { useState } from "react";
import Bar from "../../../Components/Bar";
import AllCourses from "../../../Components/AllCourses";
import Layout from "../../../Components/Layout";

const Courses = (props) => {
  const [user, serUser] = useState("admin");
  return (
    <Layout mobile={false} user={user}>
      <Bar />
      <AllCourses />
    </Layout>
  );
};
export default Courses;
