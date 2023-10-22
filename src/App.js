import React, {useState} from 'react'

import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
 const[tasks, setTasks] = useState([]);

const addTasks = (task) => {
  setTasks([...tasks , task]);
}

const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
}


  return (
    <div>
      <div className="container">
      <Header/>
      <Form addTasks={addTasks}
      />
      <TodoList tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;


