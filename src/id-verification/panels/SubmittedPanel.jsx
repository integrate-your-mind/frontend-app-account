import React from 'react';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function SubmittedPanel() {
  const panelSlug = 'submitted';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  return (
    <BasePanel
      name={panelSlug}
      title="Submitted panel"
    >
      WIP
    </BasePanel>
  );
}
