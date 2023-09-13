import { createSlice} from "@reduxjs/toolkit";

import { getContacts, addContact, deleteContact } from "api/services";

const contactsInitialState = {
        items: [],
        isLoading: false,
        error: null
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [getContacts.pending](state) {
            state.isLoading=true
        },
        [getContacts.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getContacts.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
          [addContact.pending](state) {
            state.isLoading=true
        },
        [addContact.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [addContact.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
          [deleteContact.pending](state) {
            state.isLoading=true
        },
        [deleteContact.rejected](state,action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        [deleteContact.fulfilled](state,action) {
            state.isLoading = false;
            state.error = null;
        //     console.log(String(action.payload));
        //     console.log(state.items);
           // const contacts = state.items.filter(contact =>contact.id !== action.payload.toString());
            //console.log(contacts);
            const index = state.items.findIndex(contact => contact.id === action.payload
            )
            state.items.splice(index, 1);
        }
    }
    // reducers: {

        
        // addContact: {
        //     reducer(state, action) {
        //         state.push(action.payload)
        //     },
        //     prepare(data) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 phone: data.number,
        //                 name: data.name,
        //             }
        //         }
        //     }
        // },
        // removeContact(state, action) {
        //     const index = state.findIndex(contact => contact.id === action.payload);
        //     state.splice(index, 1);
        // //    return state.filter(contact => contact.id !== action.payload.id)
        // }
    // }
})

// export const {removeContact, addContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;