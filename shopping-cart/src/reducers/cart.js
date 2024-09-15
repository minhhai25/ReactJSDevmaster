//state quản lý giỏ hàng

import { BUY_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../constants/actionTypes";
import { LOCAL_STORAGE_NAME } from "../constants/localStorageName";

//chưa mua hàng , giỏ hàng chưa tồn tại
let initialState = [];
//sử dung localStorage để tổ chức  lưu trữ giỏ hàng
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));
initialState =
  shoppingCartLocal != null && shoppingCartLocal.length > 0
    ? shoppingCartLocal
    : initialState;
//hàm kiểm tra sản phẩm ((product đã có trong giỏ hàng chưa))
const getIndexByProduct = (lisItem, product) => {
  for (let i = 0; i < lisItem.length; i++) {
    if (lisItem[i].product.productId === product.productId) {
      return i;
    }
  }
  return -1;
};
//tạo reducer ->cart
const cart = (state = initialState, action) => {
  //lấy sản phẩm, số lượng từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  //biến kiểm tra sự tồn tại của product trong state
  let index = -1;
  switch (action.type) {
    case BUY_ITEM: //trường hợp người dùng click vào nút mua hàng từ component Product
      if (state.length === 0) {
        //khách hnagf chưa mua hàng và giỏi hàng chưa có sản phẩm nào
        //push item vào giỏ hàng (state :cart)
        state.push(item);
      } else {
        //khách hàng đã mua hàng và giỏ hàng đã tồn tại
        //kiểm tra xem sản phẩm có trong giỏ hàng chưa? => viết hàm kiểm tra product getIndexByProduct
        index = getIndexByProduct(state, product);
        //TH1:Sản phẩm đã có trong giỏ hàng => tăng só lượng
        if (index >= 0) {
          //sản phẩm mua đã có trong giỏ hàng , thực hiện cập nhật thêm số lượng mua
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        } else {
          //TH2 : Sản phẩm chưa có trong giỏi hàng => thực hiện thêm sản phẩm
          //sản phẩm mua chưa có trong giỏ hàng=>thêm vào giỏ hàng
          state.push(item);
        }
      }
      //thực hiện lưu trữ state mới vào localStorage
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM:
      index = getIndexByProduct(state, product);
      state[index].quantity = parseInt(quantity);
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    case REMOVE_ITEM:
      index = getIndexByProduct(state, product);
      state=state.splice(index, 1);
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default cart;
