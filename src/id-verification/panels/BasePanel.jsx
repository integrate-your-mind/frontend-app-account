import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function BasePanel({
  children,
  focusOnMount,
  name,
  title,
}) {
  const headingRef = useRef();

  // focus heading element on mount
  useEffect(() => {
    if (focusOnMount && headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <div className={`${name}-panel`}>
      <h2 ref={headingRef} className="h4" tabIndex="-1">{title}</h2>
      {children}
    </div>
  );
}

BasePanel.propTypes = {
  children: PropTypes.node.isRequired,
  focusOnMount: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
};

BasePanel.defaultProps = {
  focusOnMount: true,
};
