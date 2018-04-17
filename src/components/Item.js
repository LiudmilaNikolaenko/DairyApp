import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {chooseActiveItem} from '../AC';

class Item extends React.Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      comments: PropTypes.array
    }),
    activeItemId: PropTypes.string,
    handleDelete: PropTypes.func,
    chooseActiveItem: PropTypes.func
  }

  handleActiveItem = () => {
    const { item, chooseActiveItem } = this.props;
    chooseActiveItem(item);
  }

  render() {
    const { item, activeItemId, handleDelete } = this.props;
    return (
      <div className = 'py-2'>
        <div className = 'row'>
          <div className = 'col-xl-1'>
            <div className = {item.id === activeItemId ? 
              'bg-danger h-100 w-25' : 
              'h-100'}></div>
          </div>
          <div className = 'col-xl-8' onClick = {this.handleActiveItem}>
            <span className = 'text-dark font-weight-bold'>{item.name}</span>&nbsp;
            <span className = 'badge badge-pill badge-primary text-white font-weight-bold'>{item.comments.length}</span>
          </div>
          <div className = 'col-xl-3'>
            <button className = 'btn btn-outline-danger font-weight-light w-100' 
              onClick = {handleDelete(item)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    activeItemId: state.activeitem.id
  }
}, {chooseActiveItem})(Item);