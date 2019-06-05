import React from 'react';

const TodoHeading = props => <h1>{props.message}!</h1>;


class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      message: "Todo List: MVP"
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <TodoHeading message={this.state.message}/>
      </div>
    );
  }
}

export default App;
