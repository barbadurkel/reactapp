import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    // apply style only if todo's completed = true


    getStyle = () => {
        return {
                background : '#f4f4f4',
                padding: '10px',
                borderBottom: '1px #ccc dotted',
                textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

        /* use arrow functions! (or normal functions, but you'll need to add a bind() keyword on the html element
     because the 'this' keyword is part of React.Component therefore, not accessible by custom functions) :

            markComplete = (e) => {
                console.log(this.props); }
         */
    

    render() {
        // Deconstructing
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                {/* the custom function needs to know the id of the element, hence the use of bind */}
                <input type="checkbox" onChange={this.props.toggleCompleted.bind(this, id)}/> {'  '}
                {title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}


// PropTypes of TodoItem 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const btnStyle = {
    backgroundColor : '#ff0000',
    color : '#fff',
    border : 'none',
    padding :'5px 9px',
    borderRadius :'50%',
    cursor : 'pointer',
    float:'right'
}

export default TodoItem
