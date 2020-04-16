import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function IdContextPanel() {
  const panelSlug = 'id-context';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="IdContextPanel"
    >
      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
