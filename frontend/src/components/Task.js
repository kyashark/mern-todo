import React from "react";
import taskStyle from "../styles/Task.module.css";

function Task() {
  return (
    <div className={taskStyle.container}>
      <form className={taskStyle.addTask}>
        <input type="text"></input>
        <button type="submit">Add</button>
      </form>
      <div className={taskStyle.taskList}>
      <div className={taskStyle.task}>
        <input type="checkbox" className={taskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={taskStyle.task}>
        <input type="checkbox" className={taskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={taskStyle.task}>
        <input type="checkbox" className={taskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={taskStyle.task}>
        <input type="checkbox" className={taskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      <div className={taskStyle.task}>
        <input type="checkbox" className={taskStyle.checkbox}></input>
        <span>Lorem ipsum dolor</span>
      </div>
      </div>
    
    </div>
  );
}

export default Task;
