import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Modal.css';

class Modal extends React.Component {
  closeModal(event) {
    console.log(event.target.outerHTML);
  }
  render() {
    return (
      <div id='modal' className='modal d-hiden'>
        <div className='modal-content'>
          <div className='modal-header-wrapper'>
            <h3 className='modal-header'>create new task</h3>
            <span className='modal-header-right'><li onClick={(e) => this.closeModal(e)} className='fa fa-window-close'></li></span>
          </div>
          <div className='radio-button'>
            <div>
              <input type="radio" name='type' value='todo' />
              <label>TODO</label>
            </div>
            <div>
              <input type="radio" name='type' value='inProgress' />
              <label>IN PROGRESS</label>
            </div>
            <div>
              <input type="radio" name='type' value='done' />
              <label>DONE</label>
            </div>
          </div>
          <div className='task-input-wrapper'>
            <input className='task-input' type="text" placeholder='Enter your task' />
          </div>
          <div className='button-wrapper'>
            <button className='btn-confirm btn-save mr-10'>Save</button>
            <button className='btn-confirm btn-cancel'>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
