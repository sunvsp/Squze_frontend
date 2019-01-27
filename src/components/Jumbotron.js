import React, { Component } from 'react';

class Jumbotron extends Component{

render(){
    return(
    <div className="jumbotron">
    <h1 className="display-4">{this.props.header}</h1>
    {/* <p class="lead">{this.props.headerDetail}</p> */}
  </div>
    )
}
}

export default Jumbotron;