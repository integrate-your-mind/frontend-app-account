import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function TakePortraitPhotoPanel() {
  const panelSlug = 'take-portrait-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h1>TakePortraitPhotoPanel</h1>
      <Link to={nextPanelSlug}>{nextPanelSlug}</Link>
    </div>
  );
}
