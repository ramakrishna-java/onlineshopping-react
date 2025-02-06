import React from 'react'
import withItem from './withItem'

class CustomerList extends React.Component {
    constructor(props) {
        super(props);

        this.refName=React.createRef();
    }

    render(){
        const {items, addItem, heading} =this.props;//destructuring concept

        const itemList =items.map((item, index)=> (
            <li key={index}>{item}</li>
        ))

        return(<>
        <h2>{heading}</h2>
        <label> Enter customer Name: <input type="text" ref={this.refName} /></label>
        <button onClick={()=> addItem(this.refName.current.value)}>Add Customer (HOC)</button>
        <ul>{itemList}</ul>
        </>)


    }

}
//argment 1 is passed  as true- for upper case
export default withItem(CustomerList)