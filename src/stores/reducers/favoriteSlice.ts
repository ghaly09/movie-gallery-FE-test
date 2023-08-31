import baseAPI from "@/src/services/API/base-API";
import { favoriteType } from "@/src/utils/types";
import {
  Slice,
  SliceCaseReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

// List of favorite from API/Base-API.ts
export const fetchDataFavorite = createAsyncThunk(
  "favorite/getFavorite",
  async (query: any) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error: any) {
      console.log("errorFetchingAPI", error);
    }
  }
);

// global state for storing favorite data
const initialState: favoriteType = {
  saved: [],
  total: 0,
};

const favoriteSlice: Slice<
  favoriteType,
  SliceCaseReducers<favoriteType>,
  "favorite"
> = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    ADD_FAVORITE: (state, action) => {
      const movie: any = action.payload;
      const existingMovie = state.saved?.find(
        (item: any) => item.id === movie.id
      );

      if (existingMovie) {
        return;
      } else {
        state.saved.push(movie);
        state.total++;
      }
    },

    REMOVE_FAVORITE: (state, action) => {
      const movieID = action.payload;
      const existingMovie = state.saved?.find(
        (item: any) => item.id === movieID
      );

      if (existingMovie) {
        state.saved = state.saved.filter((item: any) => item.id !== movieID);
        state.total--;
      }
    },
  },
});

export const { ADD_FAVORITE, REMOVE_FAVORITE } = favoriteSlice.actions;

export default favoriteSlice.reducer;
