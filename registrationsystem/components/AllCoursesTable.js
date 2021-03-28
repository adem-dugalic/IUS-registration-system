import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import { QueryStatus, useQuery } from "react-query";
import { FetchAllCourses } from "./FetchAllCourses";


const AllCoursesTable  = () => {
  const { data, status } = FetchAllCourses();
  if (status === "error") {
    return <div>Error</div>;
  }
  if (status === "loading") {
    return <div>Loading</div>;
  }

  const maybe = data.array.map((item) => (
    <tr key={item.course_id}>
      <td className="title">{item.course_id}</td>
      <td>
        <a className="ecampus" href={"https://ecampus.ius.edu.ba/" + item.Url}>
          {item.course_name}
        </a>
      </td>
      <td>{item.Lecturer}</td>
      <td>{item.AcademicUnit}</td>
      <td>
        {item.prerequisite.map((preq) => {
          return preq + " ";
        })}
      </td>
      <td>
        <div className="button">
          <form>
            <button
              id="work"
              className="courseBtn"
              // onClick={() => this.onAddItem(item._id)}
            >
              Add Course
            </button>
          </form>
        </div>
      </td>
    </tr>
  ));

  return (
    // <QueryClientProvider client={queryClient}>
    <div className="addCourses">
      <div className="allCourses" id="allCourses">
        <table className="courses">
          <tbody>
            <tr>
              <th className="semesterNum" colSpan={6}>
                All courses
              </th>
            </tr>
            <tr className="info">
              <td>Course Code</td>
              <td>Course Name</td>
              <td>Professor</td>
              <td>Faculty</td>
              <td>Prerequisites</td>
              <td>Option</td>
            </tr>
            {maybe}
          </tbody>
        </table>
      </div>
    </div>
    // </QueryClientProvider>
  );
};

export default AllCoursesTable;