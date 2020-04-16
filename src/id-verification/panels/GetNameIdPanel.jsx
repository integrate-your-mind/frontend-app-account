import React from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function GetNameIdPanel() {
  const panelSlug = 'get-name-id';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="GetNameIdPanel"
    >
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </BasePanel>
  );
}