import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
  name: "locations",
  initialState: [],
  reducers: {
    addLocation: (state, action) => {
      return [...state, action.payload];
    },
    removeLocation: (state, action) => {
      const indexToDelete = state.findIndex((el) => el.id === action.payload);
      state.splice(indexToDelete, 1);

      return state;
    },
  },
});

export const { addLocation, removeLocation } = locationsSlice.actions;

export { locationsSlice };
export default locationsSlice.reducer;
