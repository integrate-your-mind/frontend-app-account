import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function ReviewRequirementsPanel() {
  const panelSlug = 'review-requirements';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="What you will need"
      focusOnMount={false}
    >
      <ul>
        <li>A camera. (webcam or cell phone)</li>
        <li>A photo ID. (drivers license, passport, or other government issued ID)</li>
      </ul>
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </BasePanel>
  );
}