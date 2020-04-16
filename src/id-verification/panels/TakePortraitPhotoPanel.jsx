import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function TakePortraitPhotoPanel() {
  const panelSlug = 'take-portrait-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="Take portrait photo panel"
    >
      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
