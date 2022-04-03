import React, { Component } from 'react';
import './Nav.scss'
import {
    Link, NavLink
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className="topnav">
                <Link to="/">Home</Link>
                <Link to="/todo">Todos</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Nav;