import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function PortraitPhotoContextPanel() {
  const panelSlug = 'portrait-photo-context';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h1>PortraitPhotoContextPanel</h1>
      <Link to={nextPanelSlug}>{nextPanelSlug}</Link>
    </div>
  );
}
