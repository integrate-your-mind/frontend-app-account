import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import ImageFileUpload from '../ImageFileUpload';
import ImagePreview from '../ImagePreview';
import Camera from '../Camera';
import { IdVerificationContext, MEDIA_ACCESS } from '../IdVerificationContext';

export default function TakePortraitPhotoPanel() {
  const panelSlug = 'take-portrait-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { setFacePhotoFile, facePhotoFile, mediaAccess } = useContext(IdVerificationContext);
  const shouldUseCamera = mediaAccess === MEDIA_ACCESS.GRANTED;

  return (
    <BasePanel
      name={panelSlug}
      title={shouldUseCamera ? 'Take Your Photo' : 'Upload Your Portrait Photo'}
    >
      <p>When your face is in position, use the Take Photo button below to take your photo.</p>
      <div>
        {facePhotoFile && !shouldUseCamera && <ImagePreview src={facePhotoFile} alt="Preview of photo of user's face." />}

        {shouldUseCamera ? (
          <Camera onImageCapture={setFacePhotoFile} />
        ) : (
          <ImageFileUpload onFileChange={setFacePhotoFile} />
        )}
      </div>
      <h6>What if I can't see the camera image or if I can't see my photo to determine which side is visible</h6>
      <p>
        You may be able to complete the image capture procedure without assistance, but it may take a couple of submission attempts
        to get the camera positioning right. Optimal camera positioning varies with each computer, but generally the best position for
        a headshot is approximately 12-18 inches (30-45 centimeters) from the camera, with your head centered relative to the computer screen.
        If the photos you submit are rejected, try moving the computer or camera orientation to change the lighting angle. 
        The most common reason for rejection is in ability to read the text on the ID card.
      </p>
      <h6>What if I have difficulty holding my head in position relative to the camera?</h6>
      <p>If you require assistance with taking a photo for submission, contact edX support for additional suggestions.</p>

      {facePhotoFile && (
        <div className="action-row">
          <Link to={nextPanelSlug} className="btn btn-primary">
            Next
          </Link>
        </div>
      )}
    </BasePanel>
  );
}
