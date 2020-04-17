import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { history } from '@edx/frontend-platform';
import { Input, Button } from '@edx/paragon';

import { useNextPanelSlug } from '../routing-utilities';
import { submitIdVerfication } from '../data/service';
import BasePanel from './BasePanel';
import { IdVerificationContext } from '../IdVerificationContext';
import ImagePreview from '../ImagePreview';

export default function SummaryPanel() {
  const panelSlug = 'summary';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const {
    facePhotoFile,
    idPhotoFile,
    nameOnAccount,
    idPhotoName,
  } = useContext(IdVerificationContext);
  const nameToBeUsed = idPhotoName || nameOnAccount || '';
  const courseRunKey = null; // TODO: Implement course run key

  function SubmitButton() {
    function handleClick(e) {
      const verificationData = {
        facePhotoFile: facePhotoFile,
        idPhotoFile: idPhotoFile,
        idPhotoName: idPhotoName,
        courseRunKey: courseRunKey,
      };
      const { success, message } = submitIdVerfication(verificationData);
      history.push(nextPanelSlug);
    }
    return (
      <Button className="btn btn-primary" onClick={handleClick}>
        Confirm
      </Button>
    );
  }

  return (
    <BasePanel
      name={panelSlug}
      title="Review Your Photos"
    >
      <div class="row">
        <div class="col-6">
          <label htmlFor="photo-of-face">Your face</label>
          <ImagePreview
            id="photo-of-face"
            src={facePhotoFile}
            alt='Photo of your face to be submitted.'
          />
        </div>
        <div class="col-6">
          <label htmlFor="photo-of-id">Your ID</label>
          <ImagePreview
            id="photo-of-id"
            src={idPhotoFile}
            alt='Photo of your ID to be submitted.'
          />
        </div>
      </div>
      <div className="form-group">
          <label htmlFor="name-to-be-used">Name to be used</label>
          <Input
            id="name-to-be-used"
            type="text"
            readOnly
            value={nameToBeUsed}
            onChange={() => {}}
          />
      </div>
      <SubmitButton />
    </BasePanel>
  );
}
