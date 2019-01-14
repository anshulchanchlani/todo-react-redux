import React, { Component } from 'react';
import './index.scss';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn:true  };
    }
    render() {
        return (
            this.state.isLoggedIn && 
            <header className="app-header">
                <h1>Todo's</h1>
            </header>
        );
    }
}

export default Header;