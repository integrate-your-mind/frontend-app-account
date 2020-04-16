import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useNextPanelSlug } from '../routing-utilities';
import BasePanel from './BasePanel';
import { IdVerificationContext, MEDIA_ACCESS } from '../IdVerificationContext';

export default function RequestCameraAccessPanel() {
  const panelSlug = 'request-camera-access';
  const nextPanelSlug = useNextPanelSlug(panelSlug);
  const { tryGetUserMedia, mediaAccess } = useContext(IdVerificationContext);

  return (
    <BasePanel
      name={panelSlug}
      title="Request Camera Access Panel"
    >
      {mediaAccess === MEDIA_ACCESS.PENDING && (
        <>
          Click the button below to enable the camera on your device.
          <button onClick={tryGetUserMedia}>Enable Camera</button>
        </>
      )}

      {mediaAccess === MEDIA_ACCESS.GRANTED && (
        <div>
          Looks like your camera is working and ready.
        </div>
      )}

      {[MEDIA_ACCESS.UNSUPPORTED, MEDIA_ACCESS.DENIED].includes(mediaAccess) && (
        <div>
          It looks like we're unable to access your camera. You will need to upload
          image files of you and your photo id.
        </div>
      )}

      <Link to={nextPanelSlug} className="btn btn-primary">
        Next
      </Link>
    </BasePanel>
  );
}
