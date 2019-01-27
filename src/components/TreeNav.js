import React, { Component } from 'react';

class TreeNav extends Component{
    constructor(props) {
     super(props)
     this.state = {
        Categories: [
                {id: 34, name: 'ทั้งหมด'},
                {id: 35, name: 'เทียน'},
                {id: 42, name: 'ธูป'},
                {id: 56, name: 'พาน'},
                {id: 71, name: 'สังฆทาน'},
                {id: 72, name: 'จิปาถะ'},
            ]
     }
   }
   render(){
       return (
        <div className="col-1">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        {this.state.Categories.map(function (item, key) {
            return <a className="nav-link" href={"#"+item.id} key={item.id}>{item.name}</a>
            })}
        </div>
        </div>
       )
   }
}

export default TreeNav;