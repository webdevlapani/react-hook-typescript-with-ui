import {IItem} from "../../common/interface/Item";
import {
  ADD_NEW_ITEM,
  DELETE_ITEM,
  EDIT_ITEM,
  SELECT_ITEM,
} from "./ActionTypes";

// Interface for itemreducer
export interface IItemReducerState {
  // itemList
  itemList: IItem[]
  // Selected user
  selectedItem?: IItem
}

// Interface for action
export interface IAction {
  payload: any;
  type: string
}

// Initial state values for itemreducer
const initialState: IItemReducerState = {
  itemList: [],
  selectedItem: undefined
}

/**
 * Item reducer return state based on action
 * @param state
 * @param action
 */
export const itemreducer = (state: IItemReducerState = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return { ...state, itemList: [ ...state.itemList, action.payload] };

    case DELETE_ITEM:
      let itemListDelete = [...state.itemList];
      itemListDelete.splice(itemListDelete.findIndex(item => item.id === action.payload ), 1);
      return { ...state, itemList: itemListDelete};

    case EDIT_ITEM:
      let itemList = [...state.itemList];
      itemList[itemList.findIndex(item => item.id === action.payload.id)] = action.payload;
      return { ...state, itemList, selectedUser: undefined};

    case SELECT_ITEM:
      const selectedItem = state.itemList.find(item => item.id === action.payload);
      return { ...state, selectedItem};

    default:
          return { ...state };
  }
}

export default itemreducer;