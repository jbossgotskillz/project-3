import React from 'react';
import Home from './components/home';
import Todo from './components/todo'
import TodoForm from'./components/todo-form';
import TodoWrapper from './components/todo-wrapper';
import EditTodoForm from './components/edit-todo-form';
import Contact from './components/contact';
import './app.css';



function App() {

	return(
		<div>
			<header>
				Task Manager
			</header>
			<main>
				<Home />
				<Todo />
				<TodoForm />
				<TodoWrapper />
				<EditTodoForm />
				<Contact />
			</main>
		</div>
	
	)
}

export default function App()
