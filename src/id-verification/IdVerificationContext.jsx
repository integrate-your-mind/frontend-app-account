import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '@edx/frontend-platform/react';

const IdVerificationContext = React.createContext({
  facePhotoFile: null,
  idPhotoFile: null,
  idPhotoName: null,
  accountUserName: null,
  setFacePhotoFile: () => {},
  setIdPhotoFile: () => {},
  setIdPhotoName: () => {},
});

function IdVerificationContextProvider({ children }) {
  const [facePhotoFile, setFacePhotoFile] = useState(null);
  const [idPhotoFile, setIdPhotoFile] = useState(null);
  const [idPhotoName, setIdPhotoName] = useState(null);
  const { authenticatedUser } = useContext(AppContext);

  return (
    <IdVerificationContext.Provider value={{
      facePhotoFile,
      idPhotoFile,
      idPhotoName,
      nameOnAccount: authenticatedUser.name,
      setFacePhotoFile,
      setIdPhotoFile,
      setIdPhotoName,
    }}>
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
};
