import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const options = {
    // method: 'GET',
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',  
    },
}



export const getContacts = createAsyncThunk("contacts/getContacts", async (_, thunkAPI) => {
    try {
        const response = await axios.get("https://64ecea0af9b2b70f2bfb1fc5.mockapi.io/contacts", options);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

    export const addContact = createAsyncThunk("contacts/addContact",async (data, thunkAPI) => {
    try {
      const response = await axios.post("https://64ecea0af9b2b70f2bfb1fc5.mockapi.io/contacts", data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

  export const deleteContact = createAsyncThunk("contacts/deleteContact",async (id, thunkAPI) => {
      try {
        console.log(id);
      const response = await axios.delete(`https://64ecea0af9b2b70f2bfb1fc5.mockapi.io/contacts/${id}`,options);
      return response.data.id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

