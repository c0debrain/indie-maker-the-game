import React from 'react';
import { connect } from 'react-redux'
import { build } from '../actions'

const BuildBtn = ({ dispatch }) => {
  return (
    <button id="build-btn" className="green button"
      onClick={e => {
        e.preventDefault();
        dispatch(build())
      }}
    >Build</button>
  )
};
export default connect()(BuildBtn);