import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import ImageFileUpload from '../ImageFileUpload';
import ImagePreview from '../ImagePreview';
import { IdVerificationContext, MEDIA_ACCESS } from '../IdVerificationContext';

export default function TakeIdPhotoPanel() {
  const panelSlug = 'take-id-photo';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { setIdPhotoFile, idPhotoFile, mediaAccess } = useContext(IdVerificationContext);

  return (
    <BasePanel
      name={panelSlug}
      title="Take photo of id panel"
    >
      <div>
        {idPhotoFile && <ImagePreview src={idPhotoFile} name="User Image" />}

        {/* will swap with the camera component when it's ready */}
        {mediaAccess === MEDIA_ACCESS.GRANTED ? (
          <ImageFileUpload onFileChange={setIdPhotoFile} />
        ) : (
          <ImageFileUpload onFileChange={setIdPhotoFile} />
        )}
      </div>

      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
