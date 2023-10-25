// import React, { useReducer, useState } from "react";
// import { itemReducer } from "../../../Reducer/Employe_Reducer";
// const ItemList = () => {
//   const [items, dispatch] = useReducer(itemReducer, []);
//   const [inputValue, setInputValue] = useState("");
//   const [ageInputValue, setageInputValue] = useState("");
//   const [dobInputValue, setdobInputValue] = useState("");
//   const [addressInputValue, setaddressInputValue] = useState("");
//   const [phoneNoInputValue, setphoneNoInputValue] = useState("");
//   const [editIndex, setEditIndex] = useState(-1);

//   const addItem = () => {
//     if (inputValue.trim() !== "") {
//       if (editIndex === -1) {
//         dispatch({
//           type: "ADD_ITEM",
//           payload: {
//             text: inputValue,
//             number: ageInputValue,
//             Date: dobInputValue,
//             email: addressInputValue,
//             mobile: phoneNoInputValue,
//           },
//         });
//       } else {
//         dispatch({
//           type: "EDIT_ITEM",
//           payload: {
//             index: editIndex,
//             newItem: inputValue,
//             number: ageInputValue,
//             text: dobInputValue,
//             email: addressInputValue,
//             mobile: phoneNoInputValue,
//           },
//         });
//         setEditIndex(-1);
//       }
//       setInputValue("");
//       setageInputValue("");
//       setdobInputValue("");
//       setaddressInputValue("");
//       setphoneNoInputValue("");
//     }
//   };
//   const deleteItem = (index) => {
//     dispatch({ type: "DELETE_ITEM", payload: index });
//   };
//   const editItem = (index, newvalue) => {
//     dispatch({ type: "EDIT_ITEM", payload: { index, newvalue } });

//     setEditIndex(index);
//     // setInputValue(items[index]);
//   };

//   return (
//     <div className="mt-3">
//       <h1 className="text-success mt-2">UseReducer</h1>
//       <div className="mt-5">
//         <label className="form-label me-4 fw-bold">Name </label>
//         <input
//           type="text"
//           placeholder="Add an item"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//       </div>
//       <div className="mt-3">
//         <label className="form-label me-5 fw-bold">Age</label>
//         <input
//           type="number"
//           placeholder="Add an item"
//           value={ageInputValue}
//           onChange={(e) => setageInputValue(e.target.value)}
//         />
//       </div>
//       <div className="mt-3">
//         <label className="form-label me-5 fw-bold">DOB</label>
//         <input
//           type="Date"
//           placeholder="Add an item"
//           value={dobInputValue}
//           onChange={(e) => setdobInputValue(e.target.value)}
//         />
//       </div>
//       <div className="mt-3">
//         <label className="form-label me-4 fw-bold">Address</label>
//         <input
//           type="email"
//           placeholder="Add an item"
//           value={addressInputValue}
//           onChange={(e) => setaddressInputValue(e.target.value)}
//         />
//       </div>
//       <div className="mt-3">
//         <label className="form-label me-4 fw-bold">Mobile No.</label>
//         <input
//           type="number"
//           placeholder="enter your mobile number"
//           value={phoneNoInputValue}
//           onChange={(e) => setphoneNoInputValue(e.target.value)}
//         />
//       </div>
//       <div className="mt-3">
//         <button
//           type="button"
//           className="btn submit_colour fw-bold text-dark"
//           onClick={addItem}
//         >
//           {editItem ? "Edit" : "additem"}
//         </button>
//       </div>

//       <div className="mt-4 ">
//         {/* {items.map((item) => (
//           <div key={item.id}> */}
//         <div className="d-flex justify-content-center">
//           <table className="table-bordered table-responsive text-center border border-3 border-dark">
//             <thead>
//               <tr>
//                 <th className="pe-2 border border-2 border-dark">NAME</th>
//                 <th className="pe-2 border border-2 border-dark">AGE</th>
//                 <th className="pe-2 border border-2 border-dark">DOB</th>
//                 <th className="pe-2 border border-2 border-dark">ADDRESS</th>
//                 <th className="pe-2 border border-2 border-dark">Phone</th>
//                 <th className="pe-2 border border-2 border-dark">ACTION</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item) => (
//                 <tr key={item.id}>
//                   {/*... Rest of the row content as shown in your code ...*/}
//                   <td className="pe-2 border border-2 border-dark">
//                     {item.text}
//                   </td>
//                   <td className="pe-2 border border-2 border-dark">
//                     {item.number}
//                   </td>
//                   <td className="pe-2 border border-2 border-dark">
//                     {item.Date}
//                   </td>
//                   <td className="pe-2 border border-2 border-dark">
//                     {item.email}
//                   </td>
//                   <td className="pe-2 border border-2 border-dark">
//                     {item.mobile}
//                   </td>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => editItem(item)}
//                   >
//                     Edit
//                   </button>{" "}
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => deleteItem(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default ItemList;






import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  gender: "",
  language: "",
  dob: "",
  submittedData: [],
  editIndex: -1,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT_FORM":
      const newDataArray = [...state.submittedData];
      if (state.editIndex !== -1) {
        newDataArray[state.editIndex] = { ...state };
      } else {
        newDataArray.push({ ...state });
      }
      return {
        ...initialState,
        submittedData: newDataArray,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        submittedData: state.submittedData.filter(
          (_, index) => index !== action.index
        ),
      };
    case "SET_EDIT_INDEX":
      return {
        ...state,
        ...state.submittedData[action.index],
        editIndex: action.index,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FIELD", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT_FORM" });
  };

  const handleDelete = (index) => {
    dispatch({ type: "DELETE_ITEM", index });
  };

  const handleEdit = (index) => {
    dispatch({ type: "SET_EDIT_INDEX", index });
  };

  return (
    <div className="App">
      <h1>React Form Using In UseReducer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={state.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            value={state.language}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={state.dob}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {state.editIndex !== -1 ? "Save" : "Submit"}
        </button>
      </form>

      <h2>Submitted Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Language</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.confirmPassword}</td>
              <td>{data.phoneNumber}</td>
              <td>{data.gender}</td>
              <td>{data.language}</td>
              <td>{data.dob}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

