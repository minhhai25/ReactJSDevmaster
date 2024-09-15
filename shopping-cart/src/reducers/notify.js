import { BUY_ITEM, LIST_PRODUCT } from "../constants/actionTypes";
import {MSG_INTRO} from "../constants/messages"
const initialState=MSG_INTRO
//tạo reducer cho list product
const notify = (state = initialState, action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      return state;
    case BUY_ITEM:
         return state;
    default:
      return state;
  }
};
export default notify;
