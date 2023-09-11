import { createSlice} from "@reduxjs/toolkit";

import { logIn,logOut,register} from "api/auth";

const contactsInitialState = {
        user:{ name:'',email:''},
        token:'',
        auth: false,
        isLoading: false,
        error: null
}

const contactsSlice = createSlice({
    name: "auth",
    initialState: contactsInitialState,
    extraReducers: {
        [logIn.pending](state) {
            state.isLoading=true
        },
        [logIn.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [logIn.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            console.log(action.payload);
            //state.auth = action.payload;
        },
        [register.pending](state) {
            state.isLoading=true
        },
        [register.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [register.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            console.log(action.payload);
            
        },
        [logOut.pending](state) {
            state.isLoading=true
        },
        [logOut.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [logOut.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            state.auth = false;
        
           
            
        }
    }
    
})

// export const {removeContact, addContact} = contactsSlice.actions;
export const authReducer = contactsSlice.reducer;