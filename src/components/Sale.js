import React, { Component } from 'react';
import LeftPanelSale from './sales/LeftPanelSale'
import RightPanelSale from './sales/RightPanelSale'
// import TreeNav from './TreeNav';
// import Jumbotron from './Jumbotron';

class Sale extends Component{
  constructor(props) {
     super(props)
     this.state = {
        shop: [
                {id: 35, name: 'jumper', color: 'red', price: 20},
                {id: 42, name: 'shirt', color: 'blue', price: 15},
                {id: 56, name: 'pants', color: 'green', price: 25},
                {id: 71, name: 'socks', color: 'black', price: 5},
                {id: 72, name: 'socks', color: 'white', price: 5},
            ]
     }
   }
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-5" style={{borderRight: "1.5px solid #D3D3D3"}}>
          <LeftPanelSale/>   
        </div>
        <div className="col-7">
          <RightPanelSale/>
        </div>
        </div>
      </div>
    );
  }
}
export default Sale;