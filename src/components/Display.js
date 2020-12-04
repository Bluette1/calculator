import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, error } = props;
  let display = result;
  if (error) {
    display = error;
  }
  return <div className="display">{display}</div>;
};
Display.defaultProps = {
  result: '0',
  error: null,
};


Display.propTypes = { result: PropTypes.string };
export default Display;
