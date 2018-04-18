import {Record} from 'immutable';
import {ADD_ITEM, DELETE_ITEM, CHOOSE_ACTIVE_ITEM, ADD_COMMENT} from '../AC';

export const ActiveItemRecord = Record({
  id: null,
  name: '',
  comments: []
})

const defaultActiveItem = new ActiveItemRecord();

export default (activeItemState = defaultActiveItem, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_ITEM:
      if (!activeItemState.get('id')) {
        return activeItemState
          .set('id', randomId)
          .set('name', payload.name)
          .set('comments', []);
      }
      return activeItemState;
        
    case DELETE_ITEM:
      if (payload.id === activeItemState.get('id')) {
        return activeItemState
          .set('id', payload.newActiveItem.id)
          .set('name', payload.newActiveItem.name)
          .set('comments', payload.newActiveItem.comments);
      }
      return activeItemState;

    case CHOOSE_ACTIVE_ITEM:
      return activeItemState
        .set('id', payload.item.id)
        .set('name', payload.item.name)
        .set('comments', payload.item.comments);

    case ADD_COMMENT:
      return activeItemState
        .update('comments', comments => comments.concat(randomId));

    default:
      return activeItemState;
  }

}