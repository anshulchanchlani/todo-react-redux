import React, { Component,Fragment } from 'react';
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
        let datetime  = new Date(item.lastModifiedAt);
        let refinedDate = datetime.getDate() + '-' + datetime.getMonth()+1 +'-'+datetime.getFullYear()+' ' + datetime.getHours()+':'+datetime.getMinutes();
        return (
            <Fragment>
            <li className={statusOfTask}>
                <input type="checkbox"
                    name="checkbox"
                    aria-label={item.name}
                    value={item.name}
                    checked={item.completed}
                    onChange={(e) => this.props.handleOnCheck(item.id)}
                    value={item.name} /><span>{item.name}</span>
                   
                    <span aria-label="Close Task"onClick={this.handleClose} className="close-task">&times;</span>
                    <label name="modified date" className="modified-date"> at - {refinedDate}</label>
                     </li>
                     
                     </Fragment>
        );
    }
}

export default Task;