import React, { Component } from 'react';
import './Nav.scss'

class Nav extends Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="#home">Home</a>
                <a href="#news">Todos</a>
                <a href="#about">About</a>
            </div>
        );
    }
}

export default Nav;