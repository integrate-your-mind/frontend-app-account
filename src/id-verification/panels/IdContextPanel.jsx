import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function IdContextPanel() {
  const panelSlug = 'id-context';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h1>IdContextPanel</h1>
      <Link to={nextPanelSlug}>{nextPanelSlug}</Link>
    </div>
  );
}
