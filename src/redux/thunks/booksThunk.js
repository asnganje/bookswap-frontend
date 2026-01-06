import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const createBook = createAsyncThunk("books/createBook", 
  async (payload, {rejectWithValue})=> {
    try {
      const response = await api.post("/books", payload)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const getBook = createAsyncThunk("books/getBook", 
  async (payload, {rejectWithValue})=> {
    try {
      const response = await api.get(`/books/${payload}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const getBooks = createAsyncThunk("books/getBooks", 
  async (_, {rejectWithValue})=> {
    try {
      const response = await api.get("/books")
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const updateBook = createAsyncThunk("books/updateBook", 
  async ({data, id}, {rejectWithValue})=> {    
    try {
      const response = await api.put(`/books/${id}`, data)
      return response.data
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)

export const deleteBook = createAsyncThunk("books/deleteBook", 
  async (payload, {rejectWithValue})=> {
    try {
      await api.delete(`/books/${payload}`)
      return payload
    } catch (error) {
      return rejectWithValue(error?.response?.data)
    }
  }
)