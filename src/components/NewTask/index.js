import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../../actions'
import './index.scss'
class NewTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: '',
            error:false
        }
        this.taskStitchAndAdd = this.taskStitchAndAdd.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    }
    taskStitchAndAdd() {
        if (this.state.taskName !== '') {
            let newTask = {
                id: this.props.tasks.length + 1,
                name: this.state.taskName.trim(),
                createdAt: Date.now(),
                completed: false,
                lastModifiedAt: Date.now()
            }

            this.props.addTask(Object.assign({}, newTask));
            this.props.saveToDisk();
            this.setState({ taskName: '' })
        }else{
            this.setState({error:true})
        }
    }
    handleOnChange(e) {
        this.setState({error:false})
        if (e.keyCode === 13) {
            this.taskStitchAndAdd()

        }
        this.setState({ taskName: e.target.value })
    }
    handleOnKeyDown(e) {

        if (e.keyCode === 13) {
            this.taskStitchAndAdd();
        }
    }
    render() {

        return (
            <Fragment>
            <section className="new-task-form">
                <input placeholder="Enter a task" value={this.state.taskName}
                    onChange={this.handleOnChange} onKeyDown={this.handleOnKeyDown} />
                    
                <button onClick={this.taskStitchAndAdd}>Add</button>
                
            </section>
            {this.state.error?<span className="error-msg">Please enter a valid value</span>:null}
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addTask }, dispatch)
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewTask)