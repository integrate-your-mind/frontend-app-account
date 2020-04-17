import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import ImageFileUpload from '../ImageFileUpload';
import ImagePreview from '../ImagePreview';
import Camera from '../Camera';
import { IdVerificationContext, MEDIA_ACCESS } from '../IdVerificationContext';

export default function TakeIdPhotoPanel() {
  const panelSlug = 'take-id-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { setIdPhotoFile, idPhotoFile, mediaAccess } = useContext(IdVerificationContext);
  const shouldUseCamera = mediaAccess === MEDIA_ACCESS.GRANTED;
  return (
    <BasePanel
      name={panelSlug}
      title={shouldUseCamera ? 'Take ID Photo' : 'Upload Your ID Photo'}
    >
      <div>
        {idPhotoFile && !shouldUseCamera && <ImagePreview src={idPhotoFile} alt="Preview of photo of ID." />}

        {shouldUseCamera ? (
          <Camera onImageCapture={setIdPhotoFile} />
        ) : (
          <ImageFileUpload onFileChange={setIdPhotoFile} />
        )}
      </div>

      {idPhotoFile && (
        <div className="action-row">
          <Link to={nextPanelSlug} className="btn btn-primary">
            Next
          </Link>
        </div>
      )}
    </BasePanel>
  );
}
