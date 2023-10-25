import React, { useReducer, useState } from "react";
import { itemReducer } from "../Reducer/Employe_Reducer";
const ItemList = () => {
  const [items, dispatch] = useReducer(itemReducer, []);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      if (editIndex === -1) {
        dispatch({ type: "ADD_ITEM", payload: inputValue });
      } else {
        dispatch({
          type: "EDIT_ITEM",
          payload: { index: editIndex, newItem: inputValue },
        });
        setEditIndex(-1);
      }
      setInputValue("");
    }
  };

  const deleteItem = (index) => {
    dispatch({ type: "DELETE_ITEM", payload: index });
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        placeholder="Add an item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>{editIndex === -1 ? "Add" : "Edit"}</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => editItem(index)}>Edit</button>{" "}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
