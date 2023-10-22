import React, { useState } from "react";

import { AiTwotoneDelete } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

const TodoList = ({ tasks, deleteTask }) => {
const [checkedTasks, setCheckedTasks] = useState(Array(tasks.length).fill(false));

const handleCheckboxChange = (index) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !checkedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
}
  return (
    <div className="text-bg-light p-3">
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center"
          key={index}>
              <input
            type="checkbox"
            checked={checkedTasks[index]}
            onChange={() => handleCheckboxChange(index)}
          />
            <span className={checkedTasks[index] ? 'completed' : ''}>{task}</span>
            <div role="group" aria-label="Task Actions">
              <button
                type="button"
                className="btn btn-danger mx-1"
                title="Delete"
                onClick={() => deleteTask(index)}
              >
                <AiTwotoneDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className="d-flex  justify-content-center p-2 mt-3">
            <button type="button" className="btn btn-outline-danger">Delete All</button>
            </div> */}
    </div>
  );
};

export default TodoList;
