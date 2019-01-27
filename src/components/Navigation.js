import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
     <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
        <span className="navbar-brand">Navbar</span>
        {/*Menu*/}
        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
        <NavLink to="/Sale" activeClassName="is-active" className="nav-link">Sale</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Summary" activeClassName="is-active" className="nav-link">Summarize sale</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/Stock" activeClassName="is-active" className="nav-link">Stock</NavLink>
        </li>
        </ul>
    </nav>
    )
  }
}

export default Navigation;
