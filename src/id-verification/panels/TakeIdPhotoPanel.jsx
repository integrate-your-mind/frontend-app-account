import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function TakeIdPhotoPanel() {
  const panelSlug = 'take-id-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h1>TakeIdPhotoPanel</h1>
      <Link to={nextPanelSlug}>{nextPanelSlug}</Link>
    </div>
  );
}
