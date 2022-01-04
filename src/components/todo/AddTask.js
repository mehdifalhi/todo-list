import React, { Component } from 'react'
//import Task from './Task';

export class AddTask extends Component {
    
    render() {

        const { item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div>
                 <h1 className="text-center mt-4 text-decoration-underline">Ajouter Task</h1>
                 <div className="d-flex justify-content-center align-items-center" >
                <input type="text" className="form-control w-50" id="addTask" 
                value={item}     onChange={handleChange}
                 placeholder="Type new Task" />
               
                <button
                            onClick={handleSubmit}
                            disabled={item ? false : true}
                            className={
                                   editItem
                                   ? "btn btn-block btn-success "
                                   : "btn btn-block btn-primary text-uppercase"
                                     } >
            {editItem ? "edit item" : "add item"}
          </button>
                </div>
                
            </div>
        )
    }
}

export default AddTask
