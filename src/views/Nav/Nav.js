import React, { Component } from 'react';
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeclassname="active" exact>Home</NavLink>
                <NavLink to="/todo" activeclassname="active">Todos</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
            </div>
        );
    }
}

export default Nav;