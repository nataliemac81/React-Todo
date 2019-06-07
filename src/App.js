import React from 'react';
import TodoHeader from './components/TodoComponents/TodoHeader';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


const todos = [
	{
		task: 'Organize Garage',
		id: 1528817077286,
		completed: false
	},
	{
		task: 'Bake Cookies',
		id: 1528817084358,
		completed: false
	}
];



class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      message: "Todo List: MVP",
      currentList: todos
    };
  }

  addTask = (newTask) => {
    const newTodoTask = {
      task: newTask,
      id: Date.now(),
      completed: false
    }

    this.setState({currentList: [...this.state.currentList, newTodoTask]})
  }



  render() {
    return (
      <div>
        <TodoHeader message={this.state.message}/>
        <TodoList todos={this.state.currentList} />
        <TodoForm addNewTask={this.addTask}/>
      </div>
    );
  }
}

export default App;
