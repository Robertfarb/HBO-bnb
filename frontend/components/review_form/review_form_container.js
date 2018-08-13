import { connect } from 'react-redux';
import React from 'react';
import { clearErrors } from '../../actions/session_actions';
import { createReview } from '../../actions/review_actions';

import ReviewForm from './review_form';

const msp = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mdp = dispatch => {
  return {
    createReview: (spotId, review) => dispatch(createReview(spotId, review)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(msp, mdp)(ReviewForm);
