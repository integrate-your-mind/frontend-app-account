import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import { IdVerificationContext } from '../IdVerificationContext';

export default function GetNameIdPanel() {
  const panelSlug = 'get-name-id';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { nameOnAccount } = useContext(IdVerificationContext);
  return (
    <BasePanel
      name={panelSlug}
      title="GetNameIdPanel"
    >
      <p>The name on your account is: {nameOnAccount}</p>
      <Link to={nextPanelSlug}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </BasePanel>
  );
}