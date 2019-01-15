import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import NewTask from '../NewTask';
import DisplayTasks from '../DisplayTasks'
import {fetchTasks,writeTasksToFile} from '../../actions'
import Header from '../Header'
import Login from '../Login'

import './index.scss'
import { setInterval, clearInterval } from 'timers';
let intervalVar=null;
class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            isLoggedIn:false,
            invalidCreds:false,
            username:'',
            password:''
        }
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
        this.saveContentsToDisk= this.saveContentsToDisk.bind(this)
    }

    login(username,password){
        
        this.setState({username:username,password:password})
        this.props.fetchTasks(username,password)
        
        if(this.props.tasks && this.props.tasks.length>=0){
            this.setState({isLoggedIn:true})
        }
    }
    saveContentsToDisk(){
        this.props.writeTasksToFile(this.state.username,this.state.password,this.props.tasks)
    }
    logout(){
        this.saveContentsToDisk();
        this.setState({isLoggedIn:false})
        
    }
   
    render() {
       let tasks = this.props.tasks;
        return (
            <Fragment>
                <Header/>
                {!this.state.isLoggedIn?<Login loginHandler={this.login}/>:null}
                {this.state.invalidCreds?<span className="error-msg">Please enter valid credentials.</span>:null}
                {this.state.isLoggedIn?<button onClick={this.logout} className="logout-btn">Logout</button>:null}
                {this.state.isLoggedIn?<Fragment><div>
                    <NewTask saveToDisk={this.saveContentsToDisk} tasks={tasks}/>
                </div>
                <div>
                    <DisplayTasks  tasks={tasks} />
                </div></Fragment>:null}
            </Fragment>
        );
    }
}


function mapStateToProps(state){
   
    return{
        tasks:state.tasks
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchTasks,writeTasksToFile},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App)

