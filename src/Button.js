import React from 'react';
export function Button(props) {
  
  return (
    <button type="button" onClick={props.handleBtn}>
      {props.labelBtn}
    </button>
  )
}