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
  const nameOnAccountValue = nameOnAccount || '';
  return (
    <BasePanel
      name={panelSlug}
      title="Account Name Check"
    >
      <p>Please check that the name on your edX account matches the one shown on your ID.</p>

      <div className="alert alert-warning">
        <strong>Please Note: the name you enter here will be saved to in account settings.</strong>
      </div>

      {nameOnAccount && (
        <div className="form-group">
          <label htmlFor="name-on-account">Name on your account</label>
          <Input
            id="name-on-account"
            type="text"
            readOnly
            value={nameOnAccountValue}
            onChange={() => {}}
          />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="photo-id-name">Name on your id</label>
        <Input
          id="photo-id-name"
          type="text"
          value={idPhotoName || nameOnAccountValue}
          onChange={e => setIdPhotoName(e.target.value)}
        />
      </div>

      <div className="action-row">
        <Link to={nextPanelSlug} className="btn btn-primary">
          Next
        </Link>
      </div>
    </BasePanel>
  );
}
