import React, { useEffect } from "react";
import { useState } from "react";
import EditCourse from "../../../components/EditCourse";
import Layout from "../../../Components/Layout";

const EditCourses = (props) => {
  const [user, serUser] = useState("admin");
  return (
    <Layout mobile={false} user={user}>
      <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
        <EditCourse />
      </div>
    </Layout>
  );
};
export default EditCourses;
