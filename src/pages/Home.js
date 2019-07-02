import React, { Component }  from 'react';
import { Button } from '../components/Button';
import { Form } from '../components/Form';
import { List } from '../components/List';
import axios from 'axios';

export class Home extends Component {
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
    console.log('did mount')
    axios.get(`/api/vehicles`)
      .then(res => {
        const result = res.data.results;
        console.log('res ==>', res)
        console.log(result);
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
    return(
      <div>
        <h1>Home </h1>
        <Button labelBtn="Clear" handleBtn={this.clearList} />
        <Button labelBtn="Add" handleBtn={this.showAddForm} />
        { this.state.addForm &&
          <div>
            <h4>Add new vehicles</h4>
            <Form handleSubmit={this.addItem} />
          </div>
        }
        <List items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem} />
      </div>
    )
  }
}
