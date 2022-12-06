import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

const initialState = {
  companies: [],
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAV:
      return {
        ...state,
        companies: [...state.companies, action.payload],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        companies: state.companies.filter((favorite) => {
          return favorite._id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default companyReducer;
