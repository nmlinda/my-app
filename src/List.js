import React, { Component } from 'react';
import { Button } from './Button';
import { Form } from './Form';

export class List extends Component {
  render() {
    const { items, editItem } = this.props
    return (
      <ul className="App-list">
        {items.map((item) => (
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.model}</p>
            <Button labelBtn="Edit" handleBtn={this.props.addItem} />
            <Button labelBtn="Delete" handleBtn={() => this.props.deleteItem(item.id)} />
            <Form name={item.name} model={item.model} id={item.id} handleSubmit={editItem} />
          </li>
        ))}
      </ul>
    )
  }
}