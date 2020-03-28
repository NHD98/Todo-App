import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    return (
      <div className='task-wrapper'>
        <div>{this.props.item.time}</div>
        <div className='task-content'>
          <div className='task-detail'>
            {this.props.item.task}
          </div>
          <div>
            <button className='btn btn-blue'>Edit</button>
            <button className='btn btn-red btn-right'>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Task;
