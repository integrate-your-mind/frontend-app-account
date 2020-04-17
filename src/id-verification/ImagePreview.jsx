import React from 'react';
import PropTypes from 'prop-types';

export default function ImagePreview({ src, alt }) {
  return (
    <div className=" bg-light border border-light p-1 rounded" style={{ maxWidth: '20rem' }}>
      <div className="embed-responsive embed-responsive-4by3">
        <img className="embed-responsive-item" style={{ objectFit: 'contain' }} src={src} alt={name} />
      </div>
    </div>
  );
}

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
