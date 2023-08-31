import baseAPI from "@/src/services/API/base-API";
import { detailType } from "@/src/utils/types";
import {
  Slice,
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// List of detail from API/Base-API.ts
export const fetchDataDetail = createAsyncThunk(
  "detail/getDetail",
  async (query: any) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error) {
      console.log("errorFetchingDetailAPI", error);
    }
  }
);

// global state for storing detail data
const initialState: detailType = {
  status: "idle",
  loading: false,
  data: [],
  error: null,
};

const detailSlice: Slice<
  detailType,
  SliceCaseReducers<detailType>,
  "detail"
> = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataDetail.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataDetail.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataDetail.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default detailSlice.reducer;
