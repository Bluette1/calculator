import React from 'react';
import PropTypes from 'prop-types';
import '../Button.css';

const Button = ({
  value, onclick, wide, color,
}) => (
  <button
    type="button"
    style={{
      width: value === '0' ? '50%' : wide,
      backgroundColor: color,
    }}
    onClick={() => onclick(value)}
  >
    {value}
  </button>
);

Button.propTypes = { value: PropTypes.string.isRequired };
Button.propTypes = { onclick: PropTypes.func.isRequired };
Button.propTypes = { wide: PropTypes.func.isRequired };
Button.propTypes = { color: PropTypes.string };

Button.defaultProps = {
  color: '#ff7b00',
};

export default Button;
