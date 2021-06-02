import React, { useEffect } from "react";
import Layout from "../../../Components/Layout";
import Welcome from "../../../Components/Welcome";

const Home = (props) => {
  return (
    <Layout mobile={false}>
      <Welcome />
    </Layout>
  );
};
export default Home;
