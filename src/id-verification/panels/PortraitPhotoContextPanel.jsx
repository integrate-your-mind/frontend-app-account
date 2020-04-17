import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function PortraitPhotoContextPanel() {
  const panelSlug = 'portrait-photo-context';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="Portrait Photo Context Panel"
    >
      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
