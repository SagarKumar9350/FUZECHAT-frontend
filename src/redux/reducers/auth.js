import { createSlice } from "@reduxjs/toolkit";
// import { adminLogin, adminLogout, getAdmin } from "../thunks/admin";
import toast from "react-hot-toast";

const initialState = {
  user: null,
//   isAdmin: false,
  loader: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userExists: (state, action) => {
      state.user = action.payload;
      state.loader = false;
    },
    userNotExists: (state) => {
      state.user = null;
      state.loader = false;
    },
  },

});

export default authSlice;
export const { userExists, userNotExists } = authSlice.actions;