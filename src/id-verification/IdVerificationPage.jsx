import React from 'react';
import { connect } from 'react-redux';

import {
  injectIntl,
} from '@edx/frontend-platform/i18n';

import { idVerificationSelector } from './data/selectors';

class IdVerificationPage extends React.Component {
  render() {
    return (
      <div className="page__id-verification container-fluid py-5">
        <h1>ID Verification</h1>
      </div>
    );
  }
}

export default connect(idVerificationSelector, {
})(injectIntl(IdVerificationPage));

