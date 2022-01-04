import React from "react";
import './App.css';
import { v4 as uuidv4 } from 'uuid';
//bootstrap 5 
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/todo/AddTask';
import ListTask from './components/todo/ListTask';

class App extends React.Component  {
  state = {
    items:[],
    id: uuidv4(),
    item: "",
    editItem: false
  };

  handleChange = e =>{

    this.setState({
      item: e.target.value 
    });
  };

  handleSubmit = e =>{
    e.preventDefault();
    const newItem ={
      id: this.state.id,
      title : this.state.item
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuidv4(),
      editItem: false
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    });
  };
  render() {
  return (
    <div className="App">
      <div className="container">
    <section>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
        <AddTask  
                      item={this.state.item}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      editItem={this.state.editItem}
       />
    <ListTask  
     items={this.state.items}
     handleDelete={this.handleDelete}
     handleEdit={this.handleEdit}
     
    />
        </div>
      </div>
   
    </section>
    </div>
    </div>
  );
}
}
export default App;
