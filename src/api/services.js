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
        const response = await axios.get("https://connections-api.herokuapp.com/contacts", options);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

    export const addContact = createAsyncThunk("contacts/addContact",async (data, thunkAPI) => {
    try {
      const response = await axios.post("https://connections-api.herokuapp.com/contacts", data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

  export const deleteContact = createAsyncThunk("contacts/deleteContact",async (id, thunkAPI) => {
      try {
        console.log(id);
      const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

