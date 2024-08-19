// const reducer = "Devmaster Academy ";
// console.log(reducer)
// export default reducer
// 1. tạo createStore từ redux
import { createStore } from "redux";
//2.tạo reducer từ ole state và action
//input :old state và action
//output :new state và action
//2.1
const initState = {
  userName: "Minh Hai",
  courseName: "Devmaster ReactJS",
};
// 2.2. tạo reducer
const reducer = (state = initState, action) => {
  //xử lý logic khi tiếp nhận action
  switch (action.type) {
    case "CHANGE_USER_NAME":
      state.userName = action.data;
      break;
    case "CHANGE_COURSE_NAME":
      state.courseName = action.data;
      break;
      return state;
  }
      return state;

};
//3.Tạo store từ reducer
const store = createStore(reducer);
//4. hiển thị dữ liệu từ store ra component
console.log("store: ", store); //cấu trúc của store
//getState => lấy ra state
console.log("State:", store.getState());

// ***action****
// thực hiện thay đổi state trong store

//Action làm thay đổi userName trong state của store

const actChangeUserName = (param) => {
  return {
    type: "CHANGE_USER_NAME",
    data: param,
  };
};

//bắn action từ component lên store để thực thu=iện cập nhật state
// ghi chú : viết lại logic co reducer
store.dispatch(actChangeUserName("Minh Hai Nguyen....."));
console.log("state new", store.getState());
store.dispatch(actChangeUserName("Minh Hai Nguyen Thi....."));
console.log("state new", store.getState());

//action : làm thay đổi course name
const actChangeCourseName =(param)=>{
    return{
        type:"CHANGE_COURSE_NAME",
        data:param,
    }
}
// Bắn action vào store
store.dispatch(actChangeCourseName("Reactjs - Redux"));
// hiển thị dữ liệu từ store
console.log("state new(course):", store.getState());
export default reducer;
