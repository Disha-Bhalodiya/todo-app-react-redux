import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button, { SelectButton } from "./Button";
import styles from "../Styles/Modules/app.module.scss";
import TodoModal from "./Todomodal";
import { updateFilterStatus } from "../Slice/Todoslice";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      
      {/* //create a button for add task  */}
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task{" "}
      </Button>{" "}
      {/* //create button for select options */}
      <SelectButton
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all"> All </option>{" "}
        <option value="incomplete"> Incomplete </option>{" "}
        <option value="complete"> Completed </option>{" "}
      </SelectButton>{" "}
      
      {/* //this com. is used for create card for add task in todo */}
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />{" "}
    </div>
  );
}

export default AppHeader;
