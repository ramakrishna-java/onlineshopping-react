import React from 'react'

class WelcomeComponent extends React.Component {
    render() {
        return(<>
        <h1> welcome to react</h1>
        </>)
    }
}

export default class App extends React.Component {
    render() {
        return(<div>
        <WelcomeComponent />
        <WelcomeComponent />
        <WelcomeComponent />
        </div>);
    }
}