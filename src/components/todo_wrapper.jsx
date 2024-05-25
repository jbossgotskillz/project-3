import React, {useState} from 'react';
import {Todo} from './todo';
import {TodoForm} from './todo-form';
import {EditTodoForm} from './edit-todo-form';
import { v4 as uuidv4 } from 'uuid';
import {Todo} from './todo';
uuidv4();

export default function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todos => {
        setTodos([...todos, {id: uuidv4(), task: todo,
        completed: false, isEdited: false}]);
        
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed} : todo))
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (id, task) => {
        setTodos(todos.map(todo => todo.id === id ? {...
        todo, task, isEditing: !todo.isEditing} : todo) )
    }

    return (
        <div className="container my-4">
            <div className="todo-group text-center">
            <h1>What do you need to do?</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />                
                ) : (
                <Todo task={todo} key={index}
                toggleComplete={toggleComplete} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo} />
                )
            ))}
            </div>
        </div>
    )
}