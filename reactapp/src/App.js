import React from 'react';
import Todos from './components/Todos'
import './App.css';

// The main App Components, the  other components are in ./components
class App extends React.Component {

  // we create a state todos in App.js that we can feed to the other components (Todos for example)
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




    // JSX
  return (
    <div className="App">
         <Todos todos = {this.state.todos}/>
    </div>
  );



}
}

export default App;
