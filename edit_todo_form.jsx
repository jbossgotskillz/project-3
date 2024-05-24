import React, { useState } from 'react';

export default function EditTodoForm({editTodo, task}) {

  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue=("")
  }

  return (
    <form className="todo-group" onSubmit={handleSubmit}>  
      <input type="text" className="todo-input" value={value} placeholder="Update task here" onChange={
        (e) => setValue(e.target.value)} />
      <button type="submit" className="btn btn-primary todo-btn">Update Task</button>
    </form>
  )
}