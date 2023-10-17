import React, {useState} from 'react'

import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from './components/TodoList';

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div className="container">
      <Header/>
      <Form input={input} 
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
      <TodoList
      todos={todos}
      setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=dD0MdMRVHoo
