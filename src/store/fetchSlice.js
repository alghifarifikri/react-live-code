import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (_, { dispatch }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(getData(response.data));
  }
);

const dataSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    getData: (state, action) => {
      state.status = "succeeded";
      const temp = action.payload.map((item) => {
        return {
          id: item.id,
          title: item.title,
        };
      });
      state.data = temp;
    },
  },
});

export const { getData } = dataSlice.actions;
export default dataSlice.reducer;
