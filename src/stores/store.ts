import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchReducer from "./reducers/searchSlice";
import favoriteReducer from "./reducers/favoriteSlice";
import detailReducer from "./reducers/detailSlice";

const rootReducer = combineReducers({
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
