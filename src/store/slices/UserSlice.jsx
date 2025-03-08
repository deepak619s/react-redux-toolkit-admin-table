import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions/Action";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      console.log("Hii" + action.payload);
      state.splice(action.payload, 1);
    },
    // clearAllUsers(state, action) {
    //   return [];
    // },
  },

  extraReducers(builder) {
    // builder.addCase(UserSlice.actions.clearAllUsers, () => {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

// If action is supposed to be handled by one reducer, use reducers.

// If action is supposed to be handled by multiple reducers, use extraReducers.

//  console.log(UserSlice.actions.addUser());

// console.log(UserSlice);

export default UserSlice.reducer;
// export const { addUser, removeUser, clearAllUsers } = UserSlice.actions;
export const { addUser, removeUser } = UserSlice.actions;
