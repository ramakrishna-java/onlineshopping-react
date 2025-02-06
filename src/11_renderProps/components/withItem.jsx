import React from 'react'

const withItem= (WrappedComponent , toUpper)=>{
    class WithItemComp extends React.Component {
        constructor(props){
            super(props);

            this.state={items:[]}
        }

        addItem=(itemName)=>{
            this.setState(prevState => {
                return {items: [...prevState.items, toUpper? itemName.toUpperCase():itemName]}
            })
        }

        render(){
            return(
                <WrappedComponent items={this.state.items} addItem={this.addItem} />
            )
        }
    }
    return WithItemComp;
}
export default withItem;