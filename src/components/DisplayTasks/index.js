import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleTask, deleteTask } from '../../actions'
import Task from '../Task'
import './index.scss'
import { Container, Row, Col } from 'react-grid-system';
class DisplayTasks extends Component {

    render() {
        let doneItems = [], undoneItems = [];
        let self = this;

        this.props.tasks && this.props.tasks.length > 0 && this.props.tasks.forEach(function (item) {

            if (item.completed) {
                doneItems.push(
                    <Task statusOfTask="doneItems" deleteTask={self.props.deleteTask} key={item.id} item={item} handleOnCheck={self.props.toggleTask} />)
            } else {
                undoneItems.push(<Task statusOfTask="undoneItems" deleteTask={self.props.deleteTask} key={item.id} item={item} handleOnCheck={self.props.toggleTask} />)
            }
        })

        return (
            (undoneItems.length > 0 || doneItems.length > 0) && 
            <Container className="displayTaskSection">
                <Row>
                    <Col xs={12} lg={5} md={5} sm={12}>
                        <ul aria-label="Undone Items" className="displayTasksList undoneItemsUl">

                            {undoneItems}
                        </ul>
                    </Col>
                 
                    <Col xs={12} lg={5} md={5} sm={12}>
                        <ul aria-label="Done Items" className="displayTasksList doneItemsUl">

                            {doneItems}
                        </ul>
                    </Col>
                </Row>
            </Container>
        );

}}
function mapDispatchToProps(dispatch){
    return bindActionCreators({toggleTask,deleteTask},dispatch)
}

export default connect(null,mapDispatchToProps)(DisplayTasks)
