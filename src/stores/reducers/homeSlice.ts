import baseAPI from "@/src/services/API/base-API";
import { homeType } from "@/src/utils/types";
import {
  Slice,
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// List of home from API/Base-API.ts
export const fetchDataHome = createAsyncThunk(
  "home/getHome",
  async (query: any) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error: any) {
      console.log("errorFetchingAPI", error);
    }
  }
);

// global state for storing home data
const initialState: homeType = {
  status: "idle",
  loading: false,
  data: [],
  error: null,
};

const homeSlice: Slice<
  homeType,
  SliceCaseReducers<homeType>,
  "home"
> = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataHome.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataHome.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataHome.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default homeSlice.reducer;
