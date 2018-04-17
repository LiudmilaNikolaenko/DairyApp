import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addComment} from '../AC';

class CommentForm extends React.Component {
  static propTypes = {
    activeItemId: PropTypes.string,
    addComment: PropTypes.func
  };

  state = { text: '' };

  handleKeyDown = ev => {
    if (ev.keyCode === 13) {
      ev.preventDefault();
    }
    const { text } = this.state;
    const { activeItemId, addComment } = this.props;
    if (ev.ctrlKey && ev.keyCode === 13 && text && activeItemId) {
      addComment(text, activeItemId);
      this.setState({ text: '' })
    }
  };

  handleChange = ev => {
    this.setState({ text: ev.target.value });
  };

  render() {
    return (
      <form>
        <div className = 'py-2'>
          <div className = 'row'>
            <div className = 'col-xl-2'>
              <div className = 'bg-secondary square'></div>
            </div>
            <div className = 'col-xl-10'>
              <input type = 'text'
                value = {this.state.text}
                onChange = {this.handleChange}
                onKeyDown = {this.handleKeyDown}
                className = 'form-control' />
              <p className = 'text-dark mt-2'>Add comment: Ctrl+Enter</p>
            </div>
          </div>
        </div>
      </form>
    )
  };
}

export default connect((state) => {
  return {
    activeItemId: state.activeitem.id
  }
}, {addComment})(CommentForm);