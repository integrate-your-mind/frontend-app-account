import React from 'react';
import { history } from '@edx/frontend-platform';
import { Button } from '@edx/paragon';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';

export default function SummaryPanel() {
  const panelSlug = 'summary';
  const nextPanelSlug = useNextPanelSlug(panelSlug);

  function SubmitButton() {
    function handleClick(e) {
      history.push(nextPanelSlug)
    }
    return (
      <Button className="btn btn-primary" onClick={handleClick}>
        Submit
      </Button>
    );
  }

  return (
    <BasePanel
      name={panelSlug}
      title="Summary panel"
    >
      <SubmitButton />
    </BasePanel>
  );
}
