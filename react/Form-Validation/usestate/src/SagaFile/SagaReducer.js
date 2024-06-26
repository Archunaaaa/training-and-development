import * as types from "./SagaType";

const initialState = {
  employees: [],
  searchText: "",
  selectedEmployee: null,
  employeeId: null,
  employee: null,
};

const Sagareducer = (state = initialState, action) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case types.CREATEUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GETUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GETIDUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.UPDATEUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.DELETEUSER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.CREATEUSER_SUCCESS:
      const names = {
        ...state,
        employees: [...state.employees, action.payload],
        employee: action.payload,
        loading: false,
        error: null,
      };
      console.log(names);
      return names;
    case types.UPDATEUSER_SUCCESS:
      const updatedEmployees = state.employees.map((employee) =>
        employee.id === action.payload.id
          ? { ...employee, ...action.payload }
          : employee
      );
      console.log(updatedEmployees);
      return {
        ...state,
        employees: updatedEmployees,
        employee: action.payload,
        selectedEmployee: null,
      };

    case types.DELETEUSER_SUCCESS:
      const filteredEmployees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
      return { ...state, employees: filteredEmployees, employee: null };
    case types.GETUSER_SUCCESS:
      return {
        ...state,
        employeeId: null,
        employees: action.payload,
        selectedEmployee: null,
        employee: null,
      };
    case types.GETIDUSER_SUCCESS:
      return {
        ...state,
        selectedEmployee: action.payload,
        employeeId: action.payload.id,
        employee: null,
      };
    case types.CREATEUSER_ERROR:
      return {
        ...state,
        messege: action.payload,
        loading: false,
        error: null,
        employeeId: null,
      };

    case types.GETUSER_ERROR:
      return {
        ...state,
        messege: action.payload,
        loading: false,
        error: null,
        employeeId: null,
      };

    case types.GETIDUSER_ERROR:
      return {
        ...state,
        messege: action.payload,
        loading: false,
        error: null,
        employeeId: null,
      };

    case types.UPDATEUSER_ERROR:
      return {
        ...state,
        messege: action.payload,
        loading: false,
        error: null,
        employeeId: null,
      };

    case types.DELETEUSER_ERROR:
      return {
        ...state,
        messege: action.payload,
        loading: false,
        error: null,
        employeeId: null,
      };

    case "SET_LOADING":
      return { ...state, isLoading: action.value };
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.value };
    case "SET_SELECTED_PRODUCTS":
      return { ...state, selectedProducts: action.value };
    case "SET_DELETE_SELECTED_DIALOG_VISIBLE":
      return { ...state, deleteSelectedDialogVisible: action.payload };
    default:
      return state;
  }
};

export default Sagareducer;