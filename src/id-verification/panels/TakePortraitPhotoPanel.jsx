import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import ImageFileUpload from '../ImageFileUpload';
import ImagePreview from '../ImagePreview';
import { IdVerificationContext, MEDIA_ACCESS } from '../IdVerificationContext';

export default function TakePortraitPhotoPanel() {
  const panelSlug = 'take-portrait-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { setFacePhotoFile, facePhotoFile, mediaAccess } = useContext(IdVerificationContext);
  const shouldUseCamera = mediaAccess === MEDIA_ACCESS.GRANTED;

  return (
    <BasePanel
      name={panelSlug}
      title={shouldUseCamera ? 'Take Your Photo' : 'Upload Your Photo'}
    >
      <div>
        {facePhotoFile && <ImagePreview src={facePhotoFile} alt="Preview of photo of user's face." />}

        {/* will swap with the camera component when it's ready */}
        {shouldUseCamera ? (
          <ImageFileUpload onFileChange={setFacePhotoFile} />
        ) : (
          <ImageFileUpload onFileChange={setFacePhotoFile} />
        )}
      </div>

      {facePhotoFile && (
        <Link to={nextPanelSlug} className="btn btn-primary">
          Next
        </Link>
      )}
    </BasePanel>
  );
}
