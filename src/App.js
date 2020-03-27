import React from 'react';
import Header from './Components/Headers/Header';
import Column from './Components/Columns/Column';
import Modal from './Components/Modals/Modal';
import $ from 'jquery';
import './App.css';

const tasks = {
  "todo": [
    { task: 'todo 1', time: '04/15/2019, 9:25:35 PM' },
    { task: 'todo 2', time: '04/15/2019, 9:25:35 PM' }
  ],
  "inprogress": [
    { task: 'inprogress 1', time: '04/15/2019, 9:25:35 PM' },
    { task: 'in progress 2', time: '04/15/2019, 9:25:35 PM' },
    { task: 'in progress 3', time: '04/15/2019, 9:25:35 PM' }
  ],
  "done": [
    { task: 'done 1', time: '04/15/2019, 9:25:35 PM' },
    { task: 'done 2', time: '04/15/2019, 9:25:35 PM' }
  ]
}
class App extends React.Component {
  openModal = (type) => {
    // console.log(type);
    $('#modal').css('display', 'block');
    $(`input[name='type'][value='${type}']`).attr('checked', true);
  }
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <div className='content-wrapper'>
          <Column tasks={tasks.todo} type='todo' openModal={this.openModal}>to do</Column>
          <Column tasks={tasks.inprogress} type='inProgress' openModal={this.openModal}>in progress</Column>
          <Column tasks={tasks.done} type='done' openModal={this.openModal}>done</Column>
        </div>
        <Modal id='modal'></Modal>
      </div>
    );
  }
}

export default App;
