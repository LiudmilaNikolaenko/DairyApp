import {Record, OrderedMap} from 'immutable';
import {ADD_ITEM, DELETE_ITEM, ADD_COMMENT} from '../AC';

const defaultItems = new OrderedMap({});

export const ItemRecord = Record({
  id: null,
  name: '',
  comments: [],
})

export default (itemsState = defaultItems, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_ITEM:
      return itemsState
        .set(randomId, 
          new ItemRecord({id: randomId, name: payload.name, comments: []}));
        
    case DELETE_ITEM:
      return itemsState
        .delete(payload.id);

    case ADD_COMMENT:
      return itemsState
        .updateIn([payload.itemId, 'comments'],
          comments => comments.concat(randomId));

    default:
      return itemsState;
  } 

}