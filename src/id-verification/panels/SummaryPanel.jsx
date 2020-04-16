import React from 'react';

import BasePanel from './BasePanel';

export default function SummaryPanel() {
  const panelSlug = 'summary';
  return (
    <BasePanel
      name={panelSlug}
      title="Summary panel"
    >
    </BasePanel>
  );
}
