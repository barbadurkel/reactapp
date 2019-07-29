import React, { Component } from 'react'

export class Calculator extends Component {
    constructor(props){
        super(props)
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature : '20', scale ='c'}
    }

    handleCelsiusChange = (temperature) => {
            this.setState({scale:'c', temperature})
    }
    handleFahrenheitChange = (temperature) => {
            this.setState({scale: 'f', temperature})
    }

    // for convenience purposes only, might not work properly
    toCelsius = (fahrenheit) => {
        return ( fahrenheit - 32 ) * 5 / 9
    }

    toFahrenheit = (celsius) => {
        return ( celsius * 9 / 5 ) + 32
    }

   
    render() {
        const scale = this.state.scale
        const temperature = this.state.temperature
            //TODO
        const celsius =  scale === 'f' ? toCelsius(temperature) : temperature
        const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} 
                onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} 
                onTemperatureChange={this.handleFahrenheitChange}/>
            </div>  
        )
    }
}

scaleNames = {
    c: 'Celsius',
    f : 'Fahrenheit'
}

export class TemperatureInput extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }
    render() {
        //using props instead of state, cos the state is in the Calculator component passed
        // to this component as props (Controller comp. => Controlled comp.)
        const temperature = this.props.temperature
        const scale = this.props.scale
        return (
            <fieldset>
                <legend> Enter the temperatre in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange}/>
            </fieldset>

            

        )
    }
}






export default TemperatureInput
export default Calculator
