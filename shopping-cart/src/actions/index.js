import * as types from '../constants/actionTypes'
//action : load dữu liệu sản phẩm 
export const act_list_product = ()=>
{
    return{
        type:types.LIST_PRODUCT
    }
}
//action cho chức năng mua hàng (nhấn vào nút mua
export const act_buy_item = (product,quantity)=>
{
    return{
        type:types.BUY_ITEM,
        product,
        quantity
    }
}
//action cho chức năng cập nhật giỏ hàng
export const act_update_item = (product, quantity) => {
  return {
    type: types.UPDATE_ITEM,
    product,
    quantity,
  };
};
// action cho chức năng xóa sản phẩm trong giỏ hàng
export const act_remove_item = (product) => {
  return {
    type: types.REMOVE_ITEM,
    product,

  };
};
//action cho chức năng thay đổi nội dung thông báo
export const act_change= (message) => {
  return {
    type: types.CHANGE_NOTIFY,
    message,
  };
};