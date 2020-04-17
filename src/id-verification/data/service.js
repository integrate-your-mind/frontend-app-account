import qs from 'qs';

import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';


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
// eslint-disable-next-line import/prefer-default-export
export async function submitIdVerfication(verificationData) {
  const keyMap = {
    facePhotoFile: 'face_photo',
    idPhotoFile: 'photo_id_image',
    idPhotoName: 'full_name',
    courseRunKey: 'course_id',
  };
  const postData = {};
  // Don't include blank/null/undefined values.
  // Note that this will also drop the value `false`.
  Object.keys(keyMap).forEach((key) => {
    if (verificationData[key]) postData[key] = verificationData[key];
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
