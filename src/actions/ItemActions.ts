import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SELECT_ITEM,
} from "../reducers/Item/ActionTypes";
import {IItem} from "../common/interface/Item";
import {IAction} from "../reducers/Item/Itemreducer";

/**
 * Add new item action
 * @param item
 */
export const addNewItem = (item: IItem): IAction => {
  return {
    type: ADD_NEW_ITEM,
    payload: item
  }
}

/**
 * Delete item based on itemId
 * @param itemId
 */
export const deleteItem = (itemId: number): IAction => {
  return {
    type: DELETE_ITEM,
    payload: itemId
  }
}

/**
 * Edit item based on itemId
 * @param item
 */
export const editItem = (item: IItem): IAction => {
  return {
    type: EDIT_ITEM,
    payload: item
  }
}

/**
 * Select item based on itemId
 * @param itemId
 */
export const selectItem = (itemId: number): IAction => {
  return {
    type: SELECT_ITEM,
    payload: itemId
  }
}


