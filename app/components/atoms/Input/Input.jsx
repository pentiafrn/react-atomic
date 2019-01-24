import React from 'react';
import PropTypes  from 'prop-types';

require('./style.scss');

const Input = props => (
  <input type={props.type} placeholder={props.placeholder} value={props.text} className="a__input" />
);

Input.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
