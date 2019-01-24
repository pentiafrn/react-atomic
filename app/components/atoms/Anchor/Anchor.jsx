import React from 'react';
import PropTypes from 'prop-types';

require('./style.scss');

const Anchor = props => (
  <a className="a__anchor">{props.text}</a>
);

Anchor.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Anchor;
