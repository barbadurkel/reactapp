import React, { Component } from 'react'

export class Forms extends Component {

    constructor(props){
        super(props)
        this.state = {value = ''}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

handleChange = (e) => {
        this.setState({value : e.target.value})
}

handleSubmit = (e) => {
        alert(this.state.value)
        e.preventDefault()
}


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Name :
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Forms
