/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, propTypes } from 'redux-form';
import PropTypes from 'prop-types';

import { saveComment } from 'actions';

const renderInputBox = ({ input, label, meta: { touched, error } }) => (
  <div>
    <textarea {...input} className="form-control" rows="3" placeholder={label} />
    {touched && error && <div className="alert alert-danger">{error}</div>}
  </div>
);


const CommentForm = (props) => {
  const {
    handleSubmit, saveComment, pristine, submitting, reset,
  } = props;

  const onSubmit = (formValues) => {
    saveComment(formValues.commentBox);
  };

  return (
    <div className="col-md-12">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="form-group col-md-8">
            <Field name="commentBox" component={renderInputBox} label="Write a comment.." />
          </div>
          <div className="col-md-4 form-group">
            <button
              className="btn btn-outline-primary form-control"
              style={{ margin: '3px' }}
              disabled={pristine || submitting}
              type="submit"
            >
              Save Comment
            </button>
            <button
              className="btn btn-outline-info form-control"
              style={{ margin: '3px' }}
              disabled={pristine}
              type="button"
              onClick={reset}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};

const mapDispatchToProps = {
  saveComment,
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.commentBox) {
    errors.commentBox = 'The comment can not be empty';
  }
  return errors;
};

const formWrapper = reduxForm({ form: 'commentForm', validate })(CommentForm);

export default connect(null, mapDispatchToProps)(formWrapper);

CommentForm.propTypes = {
  ...propTypes,
  handleSubmit: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
};
