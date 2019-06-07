import React from 'react';
import Todo from './Todo';



//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

function TodoList(props) {
	console.log(props)
	return (
		<div className="todos-list">
			{ props.todos.map(todo => {
				return (
					<Todo todoTask={todo} />
				);
			})}
		</div>
	);
}

export default TodoList;