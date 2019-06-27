import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  
  return (
    <button type="button" onClick={props.handleBtn}>
      {props.labelBtn}
    </button>
  )
}

Button.propTypes = {
  handleBtn: PropTypes.func,
  labelBtn: PropTypes.string
};

export default Button