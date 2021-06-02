import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";

const Home = (props) => {
  const [user, serUser] = useState("admin");
  return (
    <Layout mobile={false} user={user}>
      <Welcome />
    </Layout>
  );
};
export default Home;
