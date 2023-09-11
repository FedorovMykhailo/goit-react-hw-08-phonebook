import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// const options = {
//     // method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     },
// }
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};



export const register  = createAsyncThunk("auth/register ", async (data, thunkAPI) => {
    try {
        const response = await axios.post("/users/signup", data);
        setAuthHeader(response.data.token)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })

export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", data);
        setAuthHeader(response.data.token)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})
  
export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
    try {
        const response = await axios.post("/users/logout");
        clearAuthHeader()
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
})
  
export const userIfo = createAsyncThunk("auth/userInfo", async (_, thunkAPI) => {
    try {
        const response = await axios.post("/users/curent");
        return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  })