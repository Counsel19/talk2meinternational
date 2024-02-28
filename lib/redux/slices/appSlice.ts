import { createSlice } from "@reduxjs/toolkit";

interface appSliceState {
  aboutOffset?: number;
  whatWeDoOffset?: number;
  valueOffset?: number;
  contactOffset?: number;
}

const initialState: appSliceState = {
  aboutOffset: 0,
  whatWeDoOffset: 0,
  valueOffset: 0,
  contactOffset: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAboutOffset: (state, action) => {
      state.aboutOffset = action.payload;
    },

    setWhatWeDoOffset: (state, action) => {
      state.whatWeDoOffset = action.payload;
    },
    setValuesOffset: (state, action) => {
      state.valueOffset = action.payload;
    },
    setContactOffset: (state, action) => {
      state.contactOffset = action.payload;
    },
  },
});

export const { setAboutOffset, setWhatWeDoOffset, setValuesOffset, setContactOffset } =
  appSlice.actions;

export default appSlice.reducer;
