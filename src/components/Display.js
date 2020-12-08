import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result, error } = props;
  let display = result;
  if (error) {
    display = '\u26A0';
  }
  return <div className="display">{display}</div>;
};
Display.defaultProps = {
  result: '0',
  error: false,
};

Display.propTypes = {
  result: PropTypes.string,
  error: PropTypes.bool,
};

export default Display;
