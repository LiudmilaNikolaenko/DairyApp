import {Record, OrderedMap} from 'immutable';
import {ADD_COMMENT, DELETE_ITEM} from '../AC';

const defaultComments = new OrderedMap({});

export const CommentRecord = Record({
  id: null,
  text: ''
});

export default (commentsState = defaultComments, action) => {
  const { type, payload, randomId } = action;

  switch (type) {
    case ADD_COMMENT:
      return commentsState.set(randomId, 
        new CommentRecord({id: randomId, text: payload.text}));
        
    case DELETE_ITEM:
      payload.comments.forEach(commentId => {
        commentsState.delete(commentId)
      });
      return commentsState;
  };

  return commentsState;
};
