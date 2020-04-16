import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, useRouteMatch } from 'react-router-dom';
import { injectIntl } from '@edx/frontend-platform/i18n';

import { idVerificationSelector } from './data/selectors';

import { IdVerificationContextProvider } from './IdVerificationContext';
import ReviewRequirementsPanel from './panels/ReviewRequirementsPanel';
import RequestCameraAccessPanel from './panels/RequestCameraAccessPanel';
import PortraitPhotoContextPanel from './panels/PortraitPhotoContextPanel';
import TakePortraitPhotoPanel from './panels/TakePortraitPhotoPanel';
import IdContextPanel from './panels/IdContextPanel';
import GetNameIdPanel from './panels/GetNameIdPanel';
import TakeIdPhotoPanel from './panels/TakeIdPhotoPanel';
import SummaryPanel from './panels/SummaryPanel';

// eslint-disable-next-line react/prefer-stateless-function
function IdVerificationPage() {
  const { path } = useRouteMatch();
  return (
    <div className="page__id-verification container-fluid py-5">
      <h1>Verify your Identity</h1>
      <IdVerificationContextProvider>
        <Switch>
          <Route exact path={path}>
            <Redirect to={`${path}/review-requirements`} />
          </Route>
          <Route path={`${path}/review-requirements`} component={ReviewRequirementsPanel} />
          <Route path={`${path}/request-camera-access`} component={RequestCameraAccessPanel} />
          <Route path={`${path}/portrait-photo-context`} component={PortraitPhotoContextPanel} />
          <Route path={`${path}/take-portrait-photo`} component={TakePortraitPhotoPanel} />
          <Route path={`${path}/id-context`} component={IdContextPanel} />
          <Route path={`${path}/get-name-id`} component={GetNameIdPanel} />
          <Route path={`${path}/take-id-photo`} component={TakeIdPhotoPanel} />
          <Route path={`${path}/summary`} component={SummaryPanel} />
        </Switch>
      </IdVerificationContextProvider>
    </div>
  );
}
export default connect(idVerificationSelector, {
})(injectIntl(IdVerificationPage));

