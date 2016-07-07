import React, { PropTypes } from 'react';
import AddTodoContainer from '../containers/AddTodoContainer';
import ChangeShowingContainer from '../containers/ChangeShowingContainer'

const NavBar = () => (
  < div className = "navbar-wrapper" >
  < div className = "container" >
  < nav className = "navbar navbar-default" >
  < div className = "container-fluid" >
  < div className = "navbar-header" >
  < button type = "button"
  className = "navbar-toggle collapsed"
  data-toggle = "collapse"
  data-target = "#bs-example-navbar-collapse-1"
  aria-expanded = "false" >
  < span className = "sr-only" > Toggle navigation < /span> < span className = "icon-bar" > < /span > < span className = "icon-bar" > < /span> < span className = "icon-bar" > < /span > < /button> < a className = "navbar-brand"
  href = "#" > JIRA 2.1 < /a> < /div >
  < div className = "collapse navbar-collapse"
  id = "bs-example-navbar-collapse-1" >
  < AddTodoContainer />
< ChangeShowingContainer />
< div className = "navbar-form navbar-left" > < /div> < /div> < /div > < /nav> < /div > < /div>
);

NavBar.propTypes = {};

export default NavBar;
