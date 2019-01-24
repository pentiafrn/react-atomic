import React      from 'react';
import PropTypes  from 'prop-types';

require('./style.scss');

const Label = props => (
  <span className="a__label">{props.text}</span>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
