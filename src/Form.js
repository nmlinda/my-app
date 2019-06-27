import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';

export class Form extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      name: props.name || '',
      model: props.model || '',
      nameError: false,
      modelError: false,
      formValidated: false
    }
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let minLength = event.target.minLength;
    
    if(val.length < minLength) {
      let error = nam + 'Error';
      this.setState({ [error]: true, formValidated: true })
    }
    else {
      this.setState({ [nam]: val, formValidated: false });
    }
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="name" name="name" minLength={5} value={this.state.name} onChange={this.onChangeInput} />
          <span >{ this.state.nameError && "name kurang" }</span>
          <label>Model:</label>
          <input type="text" placeholder="model" name="model" minLength={5} value={this.state.model} onChange={this.onChangeInput} />
          <span >{ this.state.modelError && "model kurang" }</span>
        </form>
        <Button labelBtn="Save" disabled={this.formValidated} handleBtn={() => handleSubmit(this.state) } />
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
