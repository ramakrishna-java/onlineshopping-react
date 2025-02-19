import React from 'react'

export default class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={

            id:"",
            productName: "",
            quantity:"",
            price:"",
            errors:{}
        }
    }

    validateForm() {
        let errors = {};
    
        if (!this.state.productName.trim()) errors.productName = "This productName is mandatory";
        if (!this.state.quantity) errors.quantity = "This quantity is mandatory";
        if (!this.state.price) errors.price = "This price is mandatory";
    
        this.setState({ errors });
    
        return Object.keys(errors).length === 0; // Return true if no errors
      }

    onSubmit(event) {
        event.preventDefault()
        if (this.validateForm()) {
            this.props.onSave(this.state);
          }
    }

    render() {
        return (<form> 
            <h1> Add Product</h1>
            <label>Product Name:
                <input type="text" onInput={e=> this.setState({productName:e.target.value})} 
                defaultValue={this.state.productName}/>
            </label>
            {this.state.errors.productName && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0" }}>
            {this.state.errors.productName}
          </p>
        )}

            <br/>
            Quantity:
            <input  type="text" onInput={e=>this.setState({quantity:e.target.value})} 
            defaultValue={this.state.quantity} />
            {this.state.errors.quantity && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0" }}>
            {this.state.errors.quantity}
          </p>
        )}
<br/>
Price:
            <input  type="text" onInput={e=>this.setState({price:e.target.value})} 
            defaultValue={this.state.price} />

{this.state.errors.price && (
          <p style={{ color: "red", fontSize: "14px", margin: "5px 0" }}>
            {this.state.errors.price}
          </p>
        )}
<br/>
            <input type="submit" value="Save" onClick={(e)=>this.onSubmit(e)} />
        </form>)
    }
}