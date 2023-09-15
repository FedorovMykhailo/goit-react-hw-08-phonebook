import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {  Notify } from "notiflix";

// const options = {
//     // method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     },
// }
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


// Notify.init = {position: 'right-top',}
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token',JSON.stringify(token))
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
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  })

export const logIn = createAsyncThunk("auth/logIn", async (data, thunkAPI) => {
    try {
        const response = await axios.post("/users/login", data);
        setAuthHeader(response.data.token)
      return response.data;
    } catch (e) {
      Notify.failure(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
})

export const refreshLogin = createAsyncThunk("auth/refreshLogin", async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token")
      setAuthHeader(JSON.parse(token));
      const response = await axios.get("/users/current");
      //console.log(response.data.token);
      //setAuthHeader(response.data.token)
      return response.data;
    } catch (e) {
      //Notify.failure(e.message);
      return thunkAPI.rejectWithValue('');
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