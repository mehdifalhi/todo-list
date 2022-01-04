import React, { Component } from 'react'


export class Task extends Component {
   

    render() {
        const { title, handleDelete, handleEdit  } = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</h6>
            <div className="todo-icon">
              <button className="mx-2  btn btn-success" onClick={handleEdit}>
               Edit  <i className="fas fa-pen" />
              </button>
              <button className="mx-2 btn btn-danger" onClick={handleDelete}>
               Delete  <i className="fas fa-trash" />
              </button>
            </div>
          </li>
          
        )
    }
}

export default Task
