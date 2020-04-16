
const panelSteps = [
  'review-requirements',
  'request-camera-access',
  'portrait-photo-context',
  'take-portrait-photo',
  'id-context',
  'get-name-id',
  'take-id-photo',
  'summary',
];

// eslint-disable-next-line import/prefer-default-export
export const useNextPanelSlug = (originSlug) => {
  // TODO: Add more logic to check whether we go to the summary panel or not
  // likely this will mean checking a context to know what has been completed so far.
  const nextIndex = panelSteps.indexOf(originSlug) + 1;
  return nextIndex < panelSteps.length ? panelSteps[nextIndex] : null;
};
