import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';

/**
 * get all settings related to the coaching plugin. Settings used
 * by Microbachelors students.
 * @param {Number} userId users are identified in the api by LMS id
 */
export async function getCoachingPreferences(userId) {
  let data = null;
  try {
    ({ data } = await getAuthenticatedHttpClient()
      .get(`${getConfig().LMS_BASE_URL}/api/coaching/v1/users/${userId}/`));
  } catch (error) {
    // Default values so the client doesn't fail if the user doesn't have an entry in the
    // UserCoaching model yet.
    data = {
      coaching_consent: false,
      user: userId,
      eligible_for_coaching: false,
      consent_form_seen: false,
    };
  }
  return data;
}

/**
 * patch all of the settings related to coaching.
 * @param {Number} userId users are identified in the api by LMS id
 * @param {Object} commitValues { coaching }
 */
export async function patchCoachingPreferences(userId, commitValues) {
  const requestUrl = `${getConfig().LMS_BASE_URL}/api/coaching/v1/users/${userId}/`;
  const { coaching } = commitValues;
  coaching.user = userId;

  await getAuthenticatedHttpClient()
    .patch(requestUrl, coaching)
    .catch((error) => {
      const apiError = Object.create(error);
      apiError.fieldErrors = JSON.parse(error.customAttributes.httpErrorResponseData);
      // eslint-disable-next-line prefer-destructuring
      apiError.fieldErrors.coaching = apiError.fieldErrors.phone_number[0];
      delete apiError.fieldErrors.phone_number;
      throw apiError;
    });
  return commitValues;
}
