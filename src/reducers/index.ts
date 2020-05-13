import { combineReducers } from 'redux';
import itemreducer, {IItemReducerState} from './Item/Itemreducer';

// Register all reducer
export interface IRootReducer {
  // item reducer state
  itemReducer: IItemReducerState
}

export default combineReducers({
  itemReducer: itemreducer
});