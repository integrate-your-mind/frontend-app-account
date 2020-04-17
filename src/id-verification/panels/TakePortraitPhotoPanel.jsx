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

  return (
    <BasePanel
      name={panelSlug}
      title="Take portrait photo panel"
    >
      <div>
        {facePhotoFile && <ImagePreview src={facePhotoFile} name="User Image" />}

        {/* will swap with the camera component when it's ready */}
        {mediaAccess === MEDIA_ACCESS.GRANTED ? (
          <ImageFileUpload onFileChange={setFacePhotoFile} />
        ) : (
          <ImageFileUpload onFileChange={setFacePhotoFile} />
        )}
      </div>

      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
