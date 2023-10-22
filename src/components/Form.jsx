import { useState } from "react";

const Form = ({addTasks}) => {
const [inputData, setInputData] =  useState("");

const updateData = (e) => {
  setInputData(e.target.value);
  console.log(inputData)
}

const handleSubmit = (e) => {
   e.preventDefault();
   addTasks(inputData);
   setInputData("");

}
 
  return (
    <form className="text-bg-light p-3" onSubmit={handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="add task 
    (ex: Buy fruits)"
          autoComplete="off"
          value={inputData}
          onChange={updateData}
        />
        <label htmlFor="floatingInput">Add Task (ex: "Buy fruits")</label>
        <button className="btn btn-danger  btn-lg mt-2 px-30">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
