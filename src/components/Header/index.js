import React, { Component } from 'react';
import {Container,Row,Col} from 'react-grid-system';
import './index.scss';
class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <h1>Todo's</h1>
            </header>
        );
    }
}

export default Header;