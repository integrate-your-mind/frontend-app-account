import qs from 'qs';

import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

/**
 * Get ID verification status from LMS.
 *
 * Returns {
 *  status: String,
 *  expires: String|null,
 *  canVerify: Boolean,
 * }
 */
export async function getExistingIdVerification() {
  const url = `${getConfig().LMS_BASE_URL}/verify_student/status/`;
  const requestConfig = {
    headers: { Accept: 'application/json' },
  };
  try {
    const responseData = await getAuthenticatedHttpClient().get(url, requestConfig);
    return {
      status: responseData.status || null,
      expires: responseData.expires || null,
      canVerify: responseData.can_verify || false,
    };
  } catch (e) {
    return { status: null, expires: null, canVerify: false };
  }
}

/**
 * Submit ID verifiction to LMS.
 *
 * verificationData should take the shape of:
 *   - facePhotoFile (String): Base64-encoded image.
 *   - idPhotoFile (String|null): Optional Base64-encoded image
 *   - idPhotoName (String|null): Optional string to change the user's name to.
 *   - courseRunKey (String|null): Optional course run to redirect to.
 *
 * Returns { success: Boolean, message: String|null }
 */
export async function submitIdVerfication(verificationData) {
  const keyMap = {
    facePhotoFile: 'face_image',
    idPhotoFile: 'photo_id_image',
    idPhotoName: 'full_name',
    courseRunKey: 'course_id',
  };
  const postData = {};
  // Don't include blank/null/undefined values.
  // Note that this will also drop the value `false`.
  Object.keys(keyMap).forEach((jsKey) => {
    const apiKey = keyMap[jsKey];
    if (verificationData[jsKey]) {
      postData[apiKey] = verificationData[jsKey];
    }
  });

  const url = `${getConfig().LMS_BASE_URL}/verify_student/submit-photos/`;
  const urlEncodedPostData = qs.stringify(postData);
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };
  try {
    await getAuthenticatedHttpClient().post(url, urlEncodedPostData, requestConfig);
    return { success: true, message: null };
  } catch (e) {
    return { success: false, message: String(e) }; // TODO: is String(e) right?
  }
}
