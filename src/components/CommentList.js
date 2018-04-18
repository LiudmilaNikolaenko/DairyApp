import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Comment from './Comment';

class CommentList extends React.Component {
  static propTypes = {
    activeItemComments: PropTypes.array,
  }

  render() {
    const { comments, activeItemComments } = this.props;
    if (!activeItemComments.length) return <p className = 'text-dark'>No comments.</p>
    return (
      <ul className = 'list-group list-group-flush'>
        {activeItemComments.map( (commentId, i) => 
          <li key = {commentId} className = 'list-group-item p-0'>
            <Comment comment = {comments.get(commentId)} index = {i} />
          </li>)}
      </ul>
    )
  }
}

export default connect((state) => ({
  comments: state.comments,
  activeItemComments: state.activeitem.comments
}))(CommentList);