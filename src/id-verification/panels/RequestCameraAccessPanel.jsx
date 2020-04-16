import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Collapsible } from '@edx/paragon';

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
        <div>
          <p>Click the button below to enable the camera on your device.</p>
          <button className="btn btn-primary mb-3" onClick={tryGetUserMedia}>
            Enable Camera
          </button>
          <Collapsible.Advanced>
            <Collapsible.Trigger tag="button" className="btn btn-link px-0 mb-3">
              Having problems?
            </Collapsible.Trigger>
            <Collapsible.Body>
              <Link to={nextPanelSlug} className="btn btn-outline-primary">
                Skip and upload image files instead
              </Link>
            </Collapsible.Body>
          </Collapsible.Advanced>
        </div>
      )}

      {mediaAccess === MEDIA_ACCESS.GRANTED && (
        <div>
          <p>
          Looks like your camera is working and ready.
          </p>
          <Link to={nextPanelSlug} className="btn btn-primary">
            Next
          </Link>
        </div>
      )}

      {[MEDIA_ACCESS.UNSUPPORTED, MEDIA_ACCESS.DENIED].includes(mediaAccess) && (
        <div>
          <p>
            It looks like we're unable to access your camera. You will need to upload
            image files of you and your photo id.
          </p>
          <Link to={nextPanelSlug} className="btn btn-primary">
            Next
          </Link>
        </div>
      )}

    </BasePanel>
  );
}
