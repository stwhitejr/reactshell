import React from 'react';
import PropTypes from 'prop-types';

export const Icon = (props) => <i className={`fab ${props.icon}`} />;
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};
