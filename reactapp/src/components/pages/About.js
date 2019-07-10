import React from 'react'

function About() {
    // React.Fragment : a 'ghost' HTML element, when you don't actually need a div or the like
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the official React Todo app, <br/>
             made by <b>Mohamed Oubella.</b></p>
        </React.Fragment>
    )
}
export default About