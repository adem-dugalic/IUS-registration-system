import React, { useEffect } from "react";
import { useState } from "react";
import EditUser from "../../../components/EditUser";
import Layout from "../../../Components/Layout";

const EditUsers = (props) => {
  const [user, serUser] = useState("admin");
  return (
    <Layout mobile={false} user={user}>
      <div tyle={{ paddingLeft: "2%", paddingRight: "2%" }}>
        <EditUser />
      </div>
    </Layout>
  );
};
export default EditUsers;
