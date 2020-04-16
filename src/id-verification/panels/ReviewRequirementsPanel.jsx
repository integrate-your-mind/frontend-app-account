import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';

export default function ReviewRequirementsPanel() {
  const panelSlug = 'review-requirements';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <div className={`${panelSlug}-panel`}>
      <h1>ReviewRequirementsPanel</h1>
      <Link to={nextPanelSlug}>{nextPanelSlug}</Link>
    </div>
  );
}
