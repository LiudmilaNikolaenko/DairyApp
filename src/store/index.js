import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
import {ItemRecord} from '../reducer/items';
import {CommentRecord} from '../reducer/comments';
import {ActiveItemRecord} from '../reducer/activeitem';
import {mapToArr, arrToMap} from '../helpers';

const initialState = localStorage.getItem('items') ?
  {
    items: arrToMap(JSON.parse(localStorage.getItem('items')), ItemRecord),
    comments: arrToMap(JSON.parse(localStorage.getItem('comments')), CommentRecord),
    activeitem: new ActiveItemRecord(JSON.parse(localStorage.getItem('activeitem')))
  } : {};

const persistMiddleware = ({ getState, dispatch }) => next => action => {
  const result = next(action);
  localStorage.setItem('items', JSON.stringify(mapToArr(getState().items)));
  localStorage.setItem('comments', JSON.stringify(mapToArr(getState().comments)));
  localStorage.setItem('activeitem', JSON.stringify(getState().activeitem.toObject()));
  return result;
}

const enhancer = applyMiddleware(persistMiddleware);

const store = createStore(reducer, initialState, enhancer);

export default store;