import React from 'react';

/* <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
Once a todo is submitted, the Todo List should re-render and show the added todo. */

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoItem: " "
		}
	}

	changeHandler = (event) => {
		this.setState({todoItem: event.target.value})
	}

	submitHandler = (event) => {
		event.preventDefault()
		this.props.addNewTask(this.state.todoItem)
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input type="text" value={this.state.todoItem} onChange={this.changeHandler} placeholder="New Task" />
				<button>Add Todo</button>
				<button>Clear Completed</button>
			</form>
		);
	}
}

export default TodoForm;
