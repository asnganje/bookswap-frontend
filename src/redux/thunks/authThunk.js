import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";


export const registerUser = createAsyncThunk("auth/registerUser",
  async(payload, {rejectWithValue})=> {
    try {
      const response = await api.post("/users", {
        user:payload
      })
      return response.data

    } catch (error) {
      return rejectWithValue(error.response?.data)
    }
  }
)

export const loginUser = createAsyncThunk("auth/loginUser",
  async(payload, {rejectWithValue})=> {
    try {
      const response = await api.post("/users/sign_in", {
        user:payload
      })
      return response.data

    } catch (error) {
      return rejectWithValue(error.response?.data)
    }
  }
)