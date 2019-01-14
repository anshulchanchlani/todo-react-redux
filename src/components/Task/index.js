import React, { Component } from 'react';
import './index.scss'
class Task extends Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(){
        this.props.deleteTask(this.props.item.id)
    }
    render() {
        const { item, statusOfTask } = this.props;
        return (
            <li className={statusOfTask}>
                <input type="checkbox"
                    value={item.name}
                    checked={item.completed}
                    onChange={(e) => this.props.handleOnCheck(item.id)}
                    value={item.name} /><span>{item.name}</span><span onClick={this.handleClose} className="close-task">&times;</span></li>
        );
    }
}

export default Task;