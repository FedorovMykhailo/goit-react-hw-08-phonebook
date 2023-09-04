import { combineReducers } from "redux";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";

export const reducer = combineReducers( {
    contacts: contactsReducer,
    filters: filtersReducer,
  })