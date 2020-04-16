import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function BasePanel({ children, name, title }) {
  const nextPanelSlug = useNextPanelSlug(name);

  return (
    <div className={`${name}-panel`}>
      <h2 className="h3" tabIndex="-1">{title}</h2>
      <div>
        {children}
      </div>
      {nextPanelSlug !== null && (
        <Link to={nextPanelSlug}>
          <button className="btn btn-primary">Next</button>
        </Link>
      )}
    </div>
  );
}

BasePanel.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
