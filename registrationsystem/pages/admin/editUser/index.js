import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/admin/AdminWelcome";

const EUser = (props) => {
  const [user, serUser] = useState("admin");
  return (
    <Layout mobile={false} user={user}>
      <div>
        <Welcome />
      </div>
    </Layout>
  );
};
export default EUser;
