import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, onclick }) => <button type="button" onClick={onclick} >{value}</button>;

Button.propTypes = { value: PropTypes.string.isRequired };
Button.propTypes = { onclick: PropTypes.func.isRequired }

export default Button;
