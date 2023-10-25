// export const itemReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return [...state, action.payload];
//     case "DELETE_ITEM":
//       return state.filter((item) => item !== action.payload);
//     case "EDIT_ITEM":
//       const newState = [...state];
//       newState[action.payload.item] = action.payload.newItem;
//       return newState;
//     default:
//       return state;
//   }
// };

export const itemReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "EDIT_ITEM":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};
