import { useEffect, useState } from "react";
import TaskStyle from "./Task.module.css";
import axios from "axios";

const Task = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/tasks")
    .then((response) =>{
      setTasks(response.data);
    })
    .catch((error) => {
      console.error(
        "There was an error fetching the tasks data",
        error
      );
    });
  },[]);

  return (
    <>
      <div className={TaskStyle.container}>
        <form className={TaskStyle.addTask}>
          <input type="text"></input>
          <button type="submit">Add</button>
        </form>
        <div className={TaskStyle.taskList}>
          {/* <div className={TaskStyle.task}>
            <input type="checkbox" className={TaskStyle.checkbox}></input>
            <span>Lorem ipsum dolor</span>
          </div> */}
         {tasks.map(task =>(
          <div className={TaskStyle.task} key={task._id}>
            <input type="checkbox" className={TaskStyle.checkbox} checked={task.completed}></input>
            <span>{task.title}</span>
          </div>
         ))}
        </div>
      </div>
    </>
  );
};

export default Task;
