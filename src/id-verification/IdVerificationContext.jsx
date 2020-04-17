import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '@edx/frontend-platform/react';
import { hasGetUserMediaSupport } from './getUserMediaShim';
import { getExistingIdVerification } from './data/service';

const IdVerificationContext = React.createContext({});

const MEDIA_ACCESS = {
  PENDING: 'pending',
  UNSUPPORTED: 'unsupported',
  DENIED: 'denied',
  GRANTED: 'granted',
};

function IdVerificationContextProvider({ children }) {
  const [existingIdVerification, setExistingIdVerification] = useState(null);
  const [facePhotoFile, setFacePhotoFile] = useState(null);
  const [idPhotoFile, setIdPhotoFile] = useState(null);
  const [idPhotoName, setIdPhotoName] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaAccess, setMediaAccess] = useState(hasGetUserMediaSupport ?
    MEDIA_ACCESS.PENDING :
    MEDIA_ACCESS.UNSUPPORTED);
  const { authenticatedUser } = useContext(AppContext);

  const contextValue = {
    existingIdVerification,
    facePhotoFile,
    idPhotoFile,
    idPhotoName,
    mediaStream,
    mediaAccess,
    nameOnAccount: authenticatedUser.name,
    setExistingIdVerification,
    setFacePhotoFile,
    setIdPhotoFile,
    setIdPhotoName,
    tryGetUserMedia: async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setMediaAccess(MEDIA_ACCESS.GRANTED);
        setMediaStream(stream);
        // If we would like to stop the stream immediately. I guess we can leave it open
        // const tracks = stream.getTracks();
        // tracks.forEach(track => track.stop());
      } catch (err) {
        setMediaAccess(MEDIA_ACCESS.DENIED);
      }
    },
  };

  useEffect(() => {(async () => {
    const existingIdV = await getExistingIdVerification();
    setExistingIdVerification(existingIdV);
  })()}, []);

  if (!existingIdVerification) {
    return (
      <div className="page__id-verification container-fluid py-5">
       <h1>Loading</h1>
      </div>
    );
  }

  if (!existingIdVerification.canVerify) {
    return (
      <div className="page__id-verification container-fluid py-5">
       <h1>Nah</h1>
      </div>
    );
  }

  return (
    <IdVerificationContext.Provider value={contextValue}>
      {children}
    </IdVerificationContext.Provider>
  );
}
IdVerificationContextProvider.propTypes = {
  children: PropTypes.node,
};
IdVerificationContextProvider.defaultProps = {
  children: undefined,
};

export {
  IdVerificationContext,
  IdVerificationContextProvider,
  MEDIA_ACCESS,
};
