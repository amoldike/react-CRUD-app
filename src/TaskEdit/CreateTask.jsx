import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");

  //extracting name and value OR comparisn
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setCategory(value);
    } else {
      setDiscription(value);
    }
  };
  let handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = category;
    taskObj["Description"] = discription;
    save(taskObj);
  };
  return (
    // using bootstrap class
    <Modal className="modal_css" isOpen={modal} toggle={toggle}>
      <ModalHeader className="modalHeader" toggle={toggle}>
        Create Task
      </ModalHeader>
      <ModalBody className="modalBody">
        <form>
          <div className="form-group">
            <label>Workout Days</label>
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              value={category}
              onChange={handleChange}
              name="category"
            >
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </select>
          </div>
          <div className="from-group">
            <label>Workout Type</label>
            <textarea
              rows="2"
              className="form-control textArea"
              value={discription}
              onChange={handleChange}
              name="discription"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create Task
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
