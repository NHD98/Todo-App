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
  "inProgress": [
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
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    }
  }
  openModal = (type) => {
    // console.log(type);
    $('#modal').css('display', 'flex');
    $(`input[name='type'][value='${type}']`).attr('checked', true);
  }
  createNewTask = (newTask, taskType) => {
    console.log(newTask);
    var oldState = this.state;
    var { todo, inProgress, done } = oldState.tasks;
    switch (taskType) {
      case 'todo':
        todo = [...todo, newTask];
        break;
      case 'inProgress':
        inProgress = [...inProgress, newTask];
        break;
      case 'done':
        done = [...done, newTask];
        break;
      default:
        break;
    }
    const newState = {
      "todo": todo,
      "inProgress": inProgress,
      "done": done
    }
    // console.log(newState);
    this.setNewState(newState);
  }
  setNewState = (newState) => {
    // console.log(newState);
    this.setState({
      tasks: newState
    });
  }
  render() {
    return (
      <div className='container'>
        <Header></Header>
        <div className='content-wrapper'>
          <Column tasks={this.state.tasks.todo} type='todo' openModal={this.openModal}>to do</Column>
          <Column tasks={this.state.tasks.inProgress} type='inProgress' openModal={this.openModal}>in progress</Column>
          <Column tasks={this.state.tasks.done} type='done' openModal={this.openModal}>done</Column>
        </div>
        <Modal id='modal' createNewTask={this.createNewTask}></Modal>
      </div>
    );
  }
}

export default App;
