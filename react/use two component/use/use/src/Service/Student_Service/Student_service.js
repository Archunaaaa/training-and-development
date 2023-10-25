export const itemReducer = (state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.payload];
      case "DELETE_ITEM":
        return state.filter((item, index) => index !== action.payload);
      case "EDIT_ITEM":
        const newState = [...state];
        newState[action.payload.index] = action.payload.newItem;
        return newState;
      default:
        return state;
    }
  };
 