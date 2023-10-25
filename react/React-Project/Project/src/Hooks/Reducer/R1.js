// export const initialState = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   phoneNumber: "",
//   gender: "",
//   language: "",
//   dob: "",
//   submittedData: [],
//   editIndex: -1,
// };
// export const formReducer = (state, action) => {
//   switch (action.type) {
//     case "UPDATE_FIELD":
//       return { ...state, [action.field]: action.value };
//     case "SUBMIT_FORM":
//       const newDataArray = [...state.submittedData];
//       if (state.editIndex !== -1) {
//         newDataArray[state.editIndex] = { ...state };
//       } else {
//         newDataArray.push({ ...state });
//       }
//       return {
//         ...initialState,
//         submittedData: newDataArray,
//       };
//     case "DELETE_ITEM":
//       return {
//         ...state,
//         submittedData: state.submittedData.filter(
//           (_, index) => index !== action.index
//         ),
//       };
//     case "SET_EDIT_INDEX":
//       return {
//         ...state,
//         ...state.submittedData[action.index],
//         editIndex: action.index,
//       };
//     default:
//       return state;
//   }
// };

import ActionTypes from "../Reducer/Action/A1";

// reducer.js
export const initialState = {
  items: [],
  editingItem: null,
};

export function Reducer(state, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case ActionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case ActionTypes.SELECT_ITEM:
      console.log(state);
      console.log(action);
      return {
        ...state,
        editingItem: state.items.find((item) => item.id === action.payload),
      };
    case ActionTypes.EDIT_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, text: action.payload.text }
            : item
        ),
        editingItem: null,
      };
    default:
      return state;
  }
}

