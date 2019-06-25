import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export class Form extends Component{
  
  constructor(props){
    super(props);
    // const id = props.id ? props.id : new Date();
    this.state = {
      id: props.id,
      name: props.name || '',
      model: props.model || '',
    }
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  

  onChangeInput = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="name" name="name" value={this.state.name} onChange={this.onChangeInput} />
          <label>Model:</label>
          <input type="text" placeholder="model" name="model" value={this.state.model} onChange={this.onChangeInput} />
        </form>
        <Button labelBtn="Save" handleBtn={() => handleSubmit(this.state) } />
      </div>
    )
  }

}
Form.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  model: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
  id: new Date()
};
