import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import NewTask from '../NewTask';
import DisplayTasks from '../DisplayTasks'
import {bindActionCreators} from 'redux';
import Header from '../Header'

import {fetchTasks} from '../../actions'

import './index.scss'
class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let tasks = this.props.tasks;
        
        console.log('App tasks are ',tasks)
        return (
            <Fragment>
                <Header/>
                <div>
                    <NewTask  tasks={tasks}/>
                </div>
                <div>
                    <DisplayTasks tasks={tasks} />
                </div>
            </Fragment>
        );
    }
}


function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}


export default connect(mapStateToProps)(App)

