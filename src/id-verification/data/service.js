import qs from 'qs';

import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';


/**
 * Submit ID verifiction to LMS.
 *
 * verificationInfo should take the shape of:
 *   - facePhotoFile: File
 *   - idPhotoFile:   File|null
 *   - idPhotoName:   String|null
 *   - courseKey:      String|null
 *
 * Returns { success: Boolean, message: String|null }
 */
// eslint-disable-next-line import/prefer-default-export
export async function submitIdVerfication(verificationInfo) {
  const url = `${getConfig().LMS_BASE_URL}/verify_student/submit-photos/`;
  const postData = qs.stringify({
    // TODO: Base64 encode these.
    face_photo: verificationInfo.facePhotoFile,
    photo_id_image: verificationInfo.idPhotoFile,
    full_name: verificationInfo.idPhotoName,
    course_id: verificationInfo.courseKey,
  });
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };
  try {
    await getAuthenticatedHttpClient().post(url, postData, requestConfig);
    return { success: true, message: null };
  } catch (e) {
    return { success: false, message: String(e) }; // TODO: is String(e) right?
  }
}
