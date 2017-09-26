import React from 'react';

class ShoppingCartApp extends React.Component {

  constructor(props){
    super(props);
    this.state={name: this.props.name};
    }

    render(){
    return(
    <div>
    <h3> Welcome, {this.state.name} to shopping cart </h3>
    </div>
    );
    }
}

export default ShoppingCartApp;
