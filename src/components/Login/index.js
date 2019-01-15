import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './index.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '',error:false };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleOnChange(e) {
        this.setState({error:false})
        if (e.target.value && e.target.value !== '') {
            this.setState({ [e.target.name]: e.target.value });

        }
    }
    handleLogin(e) {
        e.preventDefault();
        if (this.state.username !== '' && this.state.password !== '') {
           
             this.props.loginHandler(this.state.username,this.state.password)
        }else{
            this.setState({error:true})
        }

    }
    render() {

        return (
            <Container className="loginContainer">
                <form onSubmit={this.handleLogin}>
                <Row>
                    <Col xs={12} md={8} lg={8} sm={12}>
                        <input type="text" name="username" placeholder="Enter your username" onChange={this.handleOnChange} />
                    </Col>
                </Row>
                <Row>

                    <Col xs={12} md={8} lg={8} sm={12}>
                        <input type="password" name="password" placeholder="Enter your password" onChange={this.handleOnChange} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8} lg={8} sm={12}>
                        <button  onClick={this.handleLogin}>Login</button>
                    </Col>
                </Row>
                {this.state.error?<Row>
                    <Col xs={12} md={8} lg={8} sm={12}>
                        <span className="error-msg">Please check your credentials.</span>
                    </Col>
                    
                </Row>:null}
                </form>
            </Container>
        );
    }
}

export default Login;