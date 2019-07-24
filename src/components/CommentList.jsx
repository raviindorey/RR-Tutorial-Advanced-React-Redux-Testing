import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CommentList = (props) => {
  const { comments } = props;

  if (comments.length === 0) {
    return (
      <div>
        <div className="alert alert-warning">Please Add Comments</div>
      </div>
    );
  }

  return (
    <div>
      <ul className="list-group">
        {comments.map((comment, i) => (
          <li className="list-group-item" key={i}>
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  comments: state.comments,
});

CommentList.defaultProps = {
  comments: [],
};

export default connect(mapStateToProps)(CommentList);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string),
};
