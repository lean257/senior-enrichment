import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  render () {
    return (
      <nav>
        <h3><NavLink to="/">Campuses</NavLink></h3>
        <h3><NavLink to="/students">Students</NavLink></h3>
      </nav>
    )
  }
}
