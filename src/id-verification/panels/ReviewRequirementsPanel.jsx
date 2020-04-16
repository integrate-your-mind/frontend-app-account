import React from 'react';
import BasePanel from './BasePanel';

export default function ReviewRequirementsPanel() {
  return (
    <BasePanel
      name="review-requirements"
      title="What you will need"
    >
      <ul>
        <li>A camera. (webcam or cell phone)</li>
        <li>A photo ID. (drivers license, passport, or other government issued ID)</li>
      </ul>
    </BasePanel>
  );
}
