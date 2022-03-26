import React, { useState, useEffect } from "react";
import "../Styles/Categore.css";
import CreateTask from "../TaskEdit/CreateTask";
import CategoryCards from "./CategoreCard";

const Category = () => {
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

  return (
    <>
      <div className="category_list">
        <h2>Categore TyPe</h2>
        <div>
          {taskList &&
            taskList.map((obj, index) => (
              <CategoryCards taskObj={obj} index={index} />
            ))}
        </div>
      </div>

      <CreateTask save={saveTask} />
    </>
  );
};

export default Category;
