import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Form = ({input , setInput , todos , setTodos}) => {
  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {id: uuidv4() , title: input, completed: false}]);
    setInput("")
  }
  return (
    <form onSubmit={onFormSubmit}>
    <div>
    <input type="text"placeholder="add task 
    (ex: Buy fruits)"
    value={input} onChange={onInputChange} />
    <button  disabled={input === ''} className='btn btn-danger'>Add</button>
  </div>
  </form>
  )
}

export default Form