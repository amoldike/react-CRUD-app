import React, { useState } from "react";
import { FiEdit, FiDelete } from "react-icons/fi";
import EditTask from "../TaskEdit/EditTask";
import "../Styles/Card.css";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <>
      <div className=" card_style">
        <div className="card_left">
          <h3 className="category">{taskObj.Name} </h3>
        </div>
        <div className="card_right">
          <h6 className="discription">{taskObj.Description} </h6>
          <div className="edit_delete_btn">
            <FiEdit className="edit_btn" onClick={() => setModal(true)} />
            <FiDelete className="delete_btn" onClick={handleDelete} />
          </div>
        </div>
        <EditTask
          modal={modal}
          toggle={toggle}
          updateTask={updateTask}
          taskObj={taskObj}
        />
      </div>
    </>
  );
};

export default Card;
