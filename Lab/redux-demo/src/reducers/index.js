import * as types from "../constans";
const initialState = {
  userName: "Redux-Demo",
  courseName: "Redux-ReactJs",
};
const rootReducer = (state = initialState, action) => {
  // thực hiện cập nhật state
  switch (action.type) {
    case types.CHANGE_USERNAME:
      return {
        ...state,
        userName: action.data,
      };

    case types.CHANGE_COURSENAME:
      return {
        ...state,
        courseName: action.data,
      };
    default:
      return state;
  }
};

export default rootReducer;
