import React from 'react';
import './Task.css';

const item = { task: 'this is task content this is task content this is task content this is task content', type: 'type 1', time: '04/15/2019, 9:25:35 PM' }

class Task extends React.Component {
  render() {
    return (
      <div className='task-wrapper'>
        <div>{item.time}</div>
        <div className='task-content'>
          <div className='task-detail'>
            {item.task}
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
