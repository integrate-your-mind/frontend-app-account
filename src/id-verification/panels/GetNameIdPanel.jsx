import React, { useContext } from 'react';
import { Input } from '@edx/paragon';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import { IdVerificationContext } from '../IdVerificationContext';

export default function GetNameIdPanel() {
  const panelSlug = 'get-name-id';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { nameOnAccount, idPhotoName, setIdPhotoName } = useContext(IdVerificationContext);
  return (
    <BasePanel
      name={panelSlug}
      title="GetNameIdPanel"
    >
      <p>The name on your account is: {nameOnAccount}</p>

      <label htmlFor="photo-id-name">Name on your id</label>
      <Input
        id="photo-id-name"
        type="text"
        defaultValue={nameOnAccount}
        value={idPhotoName}
        onChange={e => setIdPhotoName(e.value)}
      />

      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
