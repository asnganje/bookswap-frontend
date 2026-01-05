import { createSlice } from "@reduxjs/toolkit";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../thunks/booksThunk";


const booksSlice = createSlice({
  name:"books",
  initialState: {
    books:[],
    selectedBook:null,
    loading:false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createBook.pending, (state)=> {
      state.loading = true
    })
    .addCase(createBook.fulfilled, (state, action) => {
      state.loading = false,
      state.books = [action.payload, ...state.books]
    })
    .addCase(createBook.rejected, (state, action)=> {
      state.error = action.payload
      state.loading = false
    })
    .addCase(getBook.pending, (state)=> {
      state.loading = true;
    })
    .addCase(getBook.fulfilled, (state, action)=> {
      state.loading = false;
      state.selectedBook = action.payload;
    })
    .addCase(getBook.rejected, (state, action)=> {
      state.loading=false;
      state.error = action.payload
    })
    .addCase(getBooks.pending, (state)=> {
      state.loading = true;
    })
    .addCase(getBooks.fulfilled, (state, action)=> {
      state.loading = false;
      state.books = action.payload;
    })
    .addCase(getBooks.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateBook.pending, (state)=> {
      state.loading = true;
    })
    .addCase(updateBook.fulfilled, (state, action)=> {
      state.loading = false;
      state.books = state.books.map((book)=> book.id == action.payload.id ? action.payload : book)
    })
    .addCase(updateBook.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.payload
    })
    .addCase(deleteBook.pending, (state)=> {
      state.loading = true;
    })
    .addCase(deleteBook.fulfilled, (state, action)=> {
      state.loading = false;
      state.books = state.books.filter((book)=> book.id !== action.payload)
    })
    .addCase(deleteBook.rejected, (state, action)=> {
      state.error = action.payload;
      state.loading = false;
    })
  }
})

const booksReducer = booksSlice.reducer;
export default booksReducer;