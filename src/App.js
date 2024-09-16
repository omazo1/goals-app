import logo from "./logo.svg";
import React from "react";
import "./App.css";

const App = () => {
  //JSX Code - Always use JSX code. Its easy to write the code and understand
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <ul className="goal-list">
        <li>Create React Application</li>
        <li>Learn full stack tools and technologies</li>
        <li>Complete assignments, quizzes and Tests</li>
      </ul>
    </div>
  );
};

export default App;
