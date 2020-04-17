import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { history } from '@edx/frontend-platform';
import { Button } from '@edx/paragon';

import { useNextPanelSlug } from '../routing-utilities';
import { submitIdVerfication } from '../data/service';
import BasePanel from './BasePanel';
import { IdVerificationContext } from '../IdVerificationContext';
import ImagePreview from '../ImagePreview';

export default function SummaryPanel() {
  const panelSlug = 'summary';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const context = useContext(IdVerificationContext);

  function SubmitButton() {
    function handleClick(e) {
      const verificationData = {
        facePhotoFile: context.facePhotoFile,
        idPhotoFile: context.idPhotoFile,
        idPhotoName: context.idPhotoName,
        courseRunKey: context.courseRunKey,
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
      <ImagePreview
        src={context.facePhotoFile}
        alt='Photo of your face to be submitted.'
      />
      <SubmitButton />
    </BasePanel>
  );
}
