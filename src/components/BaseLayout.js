import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';


export default class BaseLayout extends Component {
  render() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">

             <ul className="navbar-nav mr-auto">
               <li className='nav-item active'>
               <NavLink className='nav-link' to="/">Home</NavLink>
               </li>
               <li className='nav-item active'>
               <NavLink className='nav-link' to="/users">Users</NavLink>
               </li>
             </ul>
       </nav>
       <div className="d-flex justify-content-center">
       {this.props.children}
       </div>
     </div>
   );
 }
}
