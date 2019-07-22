import React, { Component } from 'react'
import { toUnicode } from 'punycode';

export class Home extends Component {
    constructor(props){
            super(props)
            this.state = {isLogged : true}
            this.handleClick = handleClick.bind(this)
    }


    handleClick = () => {
        this.setState(isLogged = !isLogged)
    }
   
    render() {
        let button;
        {this.state.isLogged ? 
            button = <LogoutButton onClick={this.handleClick}/>
             : 
            button = <LoginButton onClick={this.handleClick}/>
            
    
        }
        return (
            <div>
            {button}
            </div>
        )
    }
}

function LoginButton(props){
    return(
    <button onClick={handleClick}> Login </button>
    )
}


function LogoutButton(props){
    return(
    <button onClick={handleClick}> Logout </button>
    )
}




export default Home
