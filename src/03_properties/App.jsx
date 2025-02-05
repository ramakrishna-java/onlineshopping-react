import React from 'react'

export default class App extends React.Component {
    render() {
        return (
            <>
            <OSComponent os="windows"> Microsoft</OSComponent>
            <OSComponent os="Solaries">Sun systems</OSComponent>
            <OSComponent os="iOS">Apple</OSComponent>
            <OSComp os="android">Google</OSComp>
            <OSCompp os="tututut">TUTU</OSCompp>

            </>
        )
    }
}

const  OSCompp=(props)=>{
    return(<>
        <h1>Arrow Operating System: {props.os}</h1>
        <h3>Arrow Developed by: {props.children}</h3>
        </>)    
}

function OSComp(props) {     //Functional React Component
    return(<>
        <h1>FUn Operating System: {props.os}</h1>
        <h3>fun Developed by: {props.children}</h3>
        </>)
}

class OSComponent extends React.Component {     //Class React Component
    render() {
        return(<>
            <h1> Operating System: {this.props.os}</h1>
            <h3> Developed by: {this.props.children}</h3>
            </>)
    }
}