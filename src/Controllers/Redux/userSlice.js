import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUsers: (state) => {
      state.push({ name: "Solomon Talemwa" });
      state.push({ name: "Frank Timothy" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;
