import React from "react";
import { AllCoursesTable } from "../Components/AllCoursesTable";
import Bar from "../Components/Bar";
import Drawer from "../Components/Drawer";

import "../css/App.css";


const AllCourses = (props) => {
  return (
    <div className="panelDiv">
      <Drawer
        mobileOpenFunction={props.setMobileOpen}
        mobileOpen={props.mobileOpen}
      />
      <main className="main">
        <Bar
          setMobileOpen={props.setMobileOpen}
          mobileOpen={props.mobileOpen}
        />
        <AllCoursesTable />
      </main>
    </div>
  );
};
export default AllCourses;