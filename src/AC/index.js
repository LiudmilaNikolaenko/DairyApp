import randomID from 'random-id';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const CHOOSE_ACTIVE_ITEM = 'CHOOSE_ACTIVE_ITEM';

export const ADD_COMMENT = 'ADD_COMMENT';

export function addItem(name) {
  return {
    type: ADD_ITEM,
    payload: { name },
    randomId: randomID(24,"0a")
  }
};

export function deleteItem(id, comments, newActiveItem) {
  return {
    type: DELETE_ITEM,
    payload: { id, comments, newActiveItem }
  }
};

export function chooseActiveItem(item) {
  return {
    type: CHOOSE_ACTIVE_ITEM,
    payload: { item }
  }
};

export function addComment(text, itemId) {
  return {
    type: ADD_COMMENT,
    payload: { text, itemId },
    randomId: randomID(24,"0a")
  }
};
