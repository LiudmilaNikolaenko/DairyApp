import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string
    }),
    index: PropTypes.number
  }

  render() {
    const { comment, index } = this.props;
    return (
      <div className = 'py-2'>
        <div className = 'row'>
          <div className = 'col-xl-2'>
            <div className = {index % 2 ? 'bg-info square' : 'bg-warning square'}></div>
          </div>
          <div className = 'col-xl-10'>
            <div className = 'text-dark'>{comment.text}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;