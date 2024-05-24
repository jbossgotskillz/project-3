import React, { useState } from 'react';

export default function TodoForm({addTodo}) {

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);

    setValue=("")
  }

  return (
    <form className="todo-group" onSubmit={handleSubmit}>
      <input type="text" className="todo-input" value={value} placeholder="Add task here" onChange={
        (e) => setValue(e.target.value)} />
      <button type="submit" className="btn btn-primary todo-btn">Add task</button>
    </form>
  )
}


