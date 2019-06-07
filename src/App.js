import React from 'react';
import TodoHeader from './components/TodoComponents/TodoHeader';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      message: "Todo List: MVP"
    };
  }

  // messageChangeHandler = event => {
  //   this.setState({message: event.target.value});
  // };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoHeader message={this.state.message}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
