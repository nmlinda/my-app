import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { List } from './List';
import { Form } from './Form';
import { Button } from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      addForm: false
    }

    this.clearList = this.clearList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/vehicles`)
      .then(res => {
        const result = res.data.results;
        const filteredResult = result.filter((val, idx) => idx < 3)
        const items = filteredResult.map((val, idx) => Object.assign(val, { id: idx }))
        this.setState({ items });
      })
  }

  clearList = () => {
    this.setState({ items: [] });
  }

  addItem = newItem => {
    if (newItem.name && newItem.model) {
      this.setState({ items: [...this.state.items, newItem] });
      console.log(newItem);
    }
    else {
      alert('lengkapi form dulu')
    }
  }

  editItem = updatedItem => {
    console.log('edit', updatedItem);
    if (updatedItem.name && updatedItem.model) {
      const items = this.state.items.map(item => {
        if (item.id === updatedItem.id) {
          return item = updatedItem;
        } else {
          return item;
        }
      })
      this.setState({ items });
    }
    else {
      alert('lengkapi form dulu')
    }
  }

  deleteItem = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items });
  }

  showAddForm () {
    this.setState({ addForm: true });
  }

  render() {
    return (
      <div className="App">
        <h2>Star Wars</h2>
        <Button labelBtn="Clear" handleBtn={this.clearList} />
        <Button labelBtn="Add" handleBtn={this.showAddForm} />
        { this.state.addForm ?
          <div>
            <h4>Add new vehicles</h4>
            <Form handleSubmit={this.addItem} />
          </div>
        : null }
        <List items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} />
      </div>
    );
  }
}

export default App;
