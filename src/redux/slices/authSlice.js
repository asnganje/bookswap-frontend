import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../thunks/authThunk";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user:null,
    token:localStorage.getItem("token"),
    loading: false,
    msg:"",
    error:null
  },
  reducers: {
    logout(state) {
      state.user = null,
      state.token = null,
      localStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(registerUser.pending, (state)=> {
      state.loading = true
    })
    .addCase(registerUser.fulfilled, (state, action)=> {
      state.loading = false;
      state.user = action.payload.user
      state.msg=action.payload.msg
    })
    .addCase(registerUser.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.payload
    })
    .addCase(loginUser.pending, (state)=> {
      state.loading = true;
    })
    .addCase(loginUser.fulfilled, (state, action)=> {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token
      state.msg = action.payload.msg
    })
    .addCase(loginUser.rejected, (state, action)=> {
      state.loading = false;
      state.error = action.payload
    })
  }
})

export const {logout} = authSlice.actions;
const authReducer = authSlice.reducer
export default authReducer