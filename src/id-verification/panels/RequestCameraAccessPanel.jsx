import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function RequestCameraAccessPanel() {
  const panelSlug = 'request-camera-access';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="Request Camera Access Panel"
    >
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </BasePanel>
  );
}
