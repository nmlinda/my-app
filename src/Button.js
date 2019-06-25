import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
  Button.propTypes = {
    handleBtn: PropTypes.func,
    labelBtn: PropTypes.string
  };
  return (
    <button type="button" onClick={props.handleBtn}>
      {props.labelBtn}
    </button>
  )
}