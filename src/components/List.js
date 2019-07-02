import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import { Form } from './Form';
// import { About } from '../pages/about';
import { Link } from "react-router-dom";

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false
    }
    // this.id = props.match.params.name;
    this.showEditForm = this.showEditForm.bind(this);
  }
  showEditForm = () => {
    this.setState({editForm: true });
  }
  render() {
    const { items, editItem } = this.props
    return (
      <ul className="App-list">
        {items.map((item) => (
          <Link to={`/list/${item.id}`}>
            <li>
              <h4>{item.name}</h4>
              <p>{item.model}</p>
              <Button labelBtn="Edit" handleBtn={this.showEditForm} />
              <Button labelBtn="Delete" handleBtn={() => this.props.deleteItem(item.id)} />
              
              { this.state.editForm && <Form name={item.name} model={item.model} id={item.id} handleSubmit={editItem} /> }
            </li>
          </Link>
        ))}
      </ul>
    )
  }
}
List.propType = {
  items: PropTypes.object,
  editItem: PropTypes.func.isRequired
};