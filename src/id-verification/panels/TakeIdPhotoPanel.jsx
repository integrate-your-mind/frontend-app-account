import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function TakeIdPhotoPanel() {
  const panelSlug = 'take-id-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="Take photo of id panel"
    >
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </BasePanel>
  );
}
