import React, { useState, useEffect } from "react";
import Card from "./Card";
import CreateTask from "../TaskEdit/CreateTask";
import "../Styles/Schedule.css";

const Schedule = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(tempList);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  return (
    <>
      <div className="scheddule_list">
        <input
          type="submit"
          value={" Add Task"}
          className="add_icon"
          onClick={() => setModal(true)}
        />
        {/* <h2>TaSks</h2> */}
        <div>
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
        </div>
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default Schedule;
