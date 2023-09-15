import { createSlice} from "@reduxjs/toolkit";

import { logIn,logOut,refreshLogin,register} from "api/auth";

const authInitialState = {
        user:{ name:'',email:''},
        token:'',
        auth: false,
        isLoading: false,
        error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: authInitialState,
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
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.auth = true;
            console.log(action.payload);
            //state.auth = action.payload;
        },
        [refreshLogin.pending](state) {
            state.isLoading=true
        },
        [refreshLogin.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [refreshLogin.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
           // state.user.email = action.payload.email;
            // state.token = action.payload.token;
            state.token = JSON.parse(localStorage.getItem("token"))
            state.auth = true;
            //console.log(action.payload);
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
            state.token = "";
            state.user = { name:'',email:''}
        }
    }
    
})

// export const {removeContact, addContact} = contactsSlice.actions;
export const authReducer = authSlice.reducer;