import React from "react";
import "./Content.css";
import CourseList from "./TaskDone";
import FreeCourses from "./TaskNotDone";

const Content = () => {
  return (
    <div className="content">
      <div className="section-title">
        Nhiệm vụ đã hoàn thành
      </div>
      <CourseList />
      <FreeCourses />
    </div>
  );
};

export default Content;
