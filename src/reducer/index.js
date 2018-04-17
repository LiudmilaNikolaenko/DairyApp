import {combineReducers} from 'redux';
import items from './items';
import activeitem from './activeitem';
import comments from './comments';

export default combineReducers({ items, activeitem, comments })