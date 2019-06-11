import React from 'react';
// import TodoList from "./TodoList";

// <Todo /> is a component that takes in the todo data and displays the task to the screen.



function Todo(props) {
	return (
		<div className="todo">
			<p>{props.todoTask.task}</p>
		</div>
	);
}
	
	


export default Todo;