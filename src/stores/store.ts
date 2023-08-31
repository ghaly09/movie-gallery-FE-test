import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import detailReducer from "./reducers/detailSlice";
import favoriteReducer from "./reducers/favoriteSlice";
import homeReducer from "./reducers/homeSlice";
import searchReducer from "./reducers/searchSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  search: searchReducer,
  favorite: favoriteReducer,
  detail: detailReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
