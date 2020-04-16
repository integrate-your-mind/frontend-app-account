import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function ReviewRequirementsPanel() {
  const panelSlug = 'review-requirements';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h2 className="h3">What you will need</h2>
      <ul>
        <li>A camera. (webcam or cell phone)</li>
        <li>A photo ID. (drivers license, passport, or other government issued ID)</li>
      </ul>
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
}