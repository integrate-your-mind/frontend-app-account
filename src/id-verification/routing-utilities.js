import { useContext } from 'react';
import { IdVerificationContext } from './IdVerificationContext';

const panelSteps = [
  'review-requirements',
  'request-camera-access',
  'portrait-photo-context',
  'take-portrait-photo',
  'id-context',
  'take-id-photo',
  'get-name-id',
  'summary',
  'submitted',
];

// eslint-disable-next-line import/prefer-default-export
export const useNextPanelSlug = (originSlug) => {
  // TODO: Add more logic to check whether we go to the summary panel or not
  // likely this will mean checking a context to know what has been completed so far.
  const nextIndex = panelSteps.indexOf(originSlug) + 1;
  return nextIndex < panelSteps.length ? panelSteps[nextIndex] : null;
};

// check if the user is too far into the flow and if so, return the slug of the
// furthest panel they are allow to be.
export const useVerificationRedirectSlug = (slug) => {
  const { facePhotoFile, idPhotoFile } = useContext(IdVerificationContext);
  const indexOfCurrentPanel = panelSteps.indexOf(slug);

  // TODO: remove this short-circuit after development is done
  return null;

  // if (!facePhotoFile) {
  //   if (indexOfCurrentPanel > panelSteps.indexOf('take-portrait-photo')) {
  //     return 'portrait-photo-context';
  //   }
  // } else if (!idPhotoFile) {
  //   if (indexOfCurrentPanel > panelSteps.indexOf('take-id-photo')) {
  //     return 'id-context';
  //   }
  // }

  // // The user has satisfied requirements to view the panel they're on.
  // return null;
};
