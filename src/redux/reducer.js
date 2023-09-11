import { combineReducers } from "redux";
import { contactsReducer } from "./contactSlice";
import { filtersReducer } from "./filterSlice";
import { authReducer } from "./authSlice";

export const reducer = combineReducers( {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer
  })