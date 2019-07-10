import React from 'react';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid'


import './App.css';

// The main App Components, the  other components are in ./components
class App extends React.Component {

  // we create a state todos in App.js that we can feed to the other components (Todos for example)
  state = {
    todos: [
      {
        id : uuid.v4(),
        title : 'Lift 3 times a week',
        completed : false
      },
       {
        id : uuid.v4(),
        title : 'Cook 5 meals',
        completed : true
      },
      {
        id : uuid.v4(),
        title : 'Go out',
        completed : false
      }
    ]
  }
  
  // Toggle completed
  toggleCompleted = (id) => {
      this.setState({todos : this.state.todos.map(todo => {
        if(todo.id === id){
            todo.completed = !todo.completed;
        }
        return todo;
      }) })
  }
  // Delete the todo item
  deleteTodo = (id) => {
    // '...' the spread operator : copies everything from the state.todos
    // this function filters (keepss every element whose id is different from the one passed as a param
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]
    });

  }

  // Add a todo item
  addTodo = (title) => {
    const newTodo = {
      id : uuid.v4(),
      title : title,
      completed : false
    }
      this.setState({todos : [...this.state.todos, newTodo]});;
  }

  render(){


    // JSX
  return (
    <div className="App">
     <div className="container">
     <Header/>
      {/* passing the todos state of App.js as a 'prop' to Todos.js */}
      <AddTodo addTodo={this.addTodo}/>
         <Todos todos = {this.state.todos} toggleCompleted={this.toggleCompleted}
         deleteTodo={this.deleteTodo}/>

     </div>
    </div>
  );



}
}

export default App;
