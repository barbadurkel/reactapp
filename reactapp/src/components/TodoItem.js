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
                <input type="checkbox" onChange={this.props.toggleCompleted.bind(this, id)}/> {'  '}
                {title}
                </p>
            </div>
        )
    }
}


// PropTypes of TodoItem 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

const itemStyle = {
    backgroundColor : '#000000'
}

export default TodoItem
