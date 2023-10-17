import React from "react";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button>Complete</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
