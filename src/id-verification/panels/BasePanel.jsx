import React from 'react';
import PropTypes from 'prop-types';

export default function BasePanel({ children, name, title }) {
  return (
    <div className={`${name}-panel`}>
      <h2 className="h4">{title}</h2>
      {children}
    </div>
  );
}

BasePanel.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};
