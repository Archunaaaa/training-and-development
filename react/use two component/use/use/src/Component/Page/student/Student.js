import React, { useReducer, useState } from "react";
import { itemReducer } from "../../../Reducer/Employe_Reducer";

const AnotherItemList = () => {
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
      <h1 className="text-success mt-2">UseReducer</h1>
      <input
        type="text"
        placeholder="Add an item"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn btn-info  ms-2" onClick={addItem}>
        {editIndex === -1 ? "Add" : "Edit"}
      </button>
      <div className="mt-4">
        {items.map((item, index) => (
          <div key={index}>
            {item}{" "}
            <button className="btn btn-primary" onClick={() => editItem(index)}>
              Edit
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(index)}
            >
              Delete 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherItemList;
