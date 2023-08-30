import baseAPI from "@/src/services/API/base-API";
import { searchType } from "@/src/utils/types";
import {
  Slice,
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// List of search from API/Base-API.ts
export const fetchDataSearch = createAsyncThunk(
  "search/getSearch",
  async (query: any) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error: any) {
      console.log("errorFetchingAPI", error);
    }
  }
);

// global state for storing search data
const initialState: searchType = {
  status: "idle",
  loading: false,
  data: [],
  error: null,
};

const searchSlice: Slice<
  searchType,
  SliceCaseReducers<searchType>,
  "search"
> = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataSearch.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataSearch.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataSearch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default searchSlice.reducer;
