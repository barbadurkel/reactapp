import React from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id : 1,
        title : 'Lift 3 times a week',
        completed : false
      },
       {
        id : 2,
        title : 'Cook 5 meals',
        completed : false
      },
      {
        id : 3,
        title : 'Go out',
        completed : false
      }
    ]
  }

  render(){

 // console.log(this.state.todos);

  return (
    <div className="App">
        <Todos todos = {this.state.todos}/>
    </div>
  );
}
}

export default App;
