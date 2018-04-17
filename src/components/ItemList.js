import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapToArr} from '../helpers';
import {deleteItem} from '../AC';
import Item from './Item';

class ItemList extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    activeItem: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      comments: PropTypes.array
    }),
    deleteItem: PropTypes.func
  }

  handleDelete = (item) => () => {
    const { items, activeItem, deleteItem } = this.props;
    let newActiveItem;
    if (activeItem.id === item.id) {
      newActiveItem = items.length > 1 ? 
        items[0].id != item.id && items[0] || items[1] :
        { id: null, name: '', comments: [] };
    } else {
      newActiveItem = activeItem;
    }
    deleteItem(item.id, item.comments, newActiveItem);
  }

  render() {
    const { items } = this.props;
    if (!items.length) return <p className = 'text-dark pb-2'>No items.</p>
    return (
      <ul className = 'list-group list-group-flush'>
        {items.map( item => 
          <li key = {item.id} className = 'list-group-item list-group-item-action p-0'>
            <Item item = {item} handleDelete = {this.handleDelete} />
          </li>)}
      </ul>
    )
  }
}

export default connect((state) => {
  return {
    items: mapToArr(state.items),
    activeItem: state.activeitem
  }
}, {deleteItem})(ItemList);