import React from "react";
import Task from "../Tasks/Task";
import 'font-awesome/css/font-awesome.min.css';
import './Column.css';

class Column extends React.Component {
  openModal() {
    // alert(this.props.type);
    this.props.openModal(this.props.type);
  }
  render() {
    return (
      <div className='column-wrapper'>
        <div className='column-header'>
          <span className='number-content'>{this.props.tasks.length}</span><span className='column-label'>{this.props.children}</span>
          <span className='header-right' onClick={() => this.openModal()}><i className="fas fa-plus"></i>new task</span>
        </div>
        <div className='column-content'>
          {
            this.props.tasks.map((item, index) => {
              return <Task key={index} item={item}></Task>
            })
          }
        </div>
      </div>
    );
  }
}
export default Column;
