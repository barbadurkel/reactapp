import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends React.Component{
    render(){

      {/* accessing the todos property (the App component's state) 
          console.log(this.props.todos) */}

          {/* for each todo in todos, return a TodoItem component */}
  return this.props.todos.map((todo) => (
        // passing the Todos' prop todos[i] (foreach), as a TodoItem prop todo (to be accessible with :
        // this.props.todo in TodoItem.js ), NB : lists should have keys each key is unique.
        
            <TodoItem key={todo.id} todo={todo}/>
  ));
}
}


// PropTypes of Todos 
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos
