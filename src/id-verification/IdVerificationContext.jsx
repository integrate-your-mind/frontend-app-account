import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '@edx/frontend-platform/react';
import { hasGetUserMediaSupport } from './getUserMediaShim';

const IdVerificationContext = React.createContext({});

const MEDIA_ACCESS = {
  PENDING: 'pending',
  UNSUPPORTED: 'unsupported',
  DENIED: 'denied',
  GRANTED: 'granted',
};

function IdVerificationContextProvider({ children }) {
  const [facePhotoFile, setFacePhotoFile] = useState(null);
  const [idPhotoFile, setIdPhotoFile] = useState(null);
  const [idPhotoName, setIdPhotoName] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaAccess, setMediaAccess] = useState(hasGetUserMediaSupport ?
    MEDIA_ACCESS.PENDING :
    MEDIA_ACCESS.UNSUPPORTED);
  const { authenticatedUser } = useContext(AppContext);

  const contextValue = {
    facePhotoFile,
    idPhotoFile,
    idPhotoName,
    mediaStream,
    mediaAccess,
    nameOnAccount: authenticatedUser.name,
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
