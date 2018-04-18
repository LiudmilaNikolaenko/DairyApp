import React  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class Comments extends React.Component {
  static propTypes = {
    activeItemName: PropTypes.string
  }

  render() {
    const { activeItemName } = this.props;
    return ( 
      <div className = 'wrapper mx-1 mt-2 mb-3 px-3 pt-2'>
        <h2 className = 'text-dark font-weight-light'>Comments</h2>
        <h5 className = 'text-secondary font-weight-light'>{activeItemName}</h5>
        <CommentList />
        <CommentForm />
      </div>
    )
  };
};

export default connect((state) => ({
  activeItemName: state.activeitem.name
}))(Comments);