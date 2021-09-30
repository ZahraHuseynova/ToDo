
import { combineReducers } from 'redux';
import { inputReducer } from './inputReducer';
import { todoReducer } from './todoReducer';


export default combineReducers({
    todos:todoReducer,
    todo: inputReducer
});
