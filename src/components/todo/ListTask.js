import React, { Component } from 'react'
import Task from './Task'

export class ListTask extends Component {
    render() {
        const { items, handleDelete, handleEdit } = this.props;
        return (
            <div>
                <h1 className="text-center mt-4 text-decoration-underline">List Task</h1>
            <div className="d-flex justify-content-center align-items-center">
                <input id="inpCle" type="text" className="form-control w-50" placeholder="Filter Task by title" />
                <span className="input-group-text m-3"></span>
            </div>
            <div>

                 {items.map(item => {
                 return (
                    <Task
                    key={item.id}
                    title={item.title}
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                        
                     />
          );
        })}
            </div>
                
            </div>
        )
    }
}

export default ListTask
