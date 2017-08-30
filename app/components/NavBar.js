import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render () {
    return (
      <nav className="navbar">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Campuses</NavLink>
            </li>
            <li>
              <NavLink to="/students" activeClassName="active">Students</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
