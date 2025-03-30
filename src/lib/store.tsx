import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import { useDispatch } from "react-redux";
import fetchSlice from "./slices/fetchSlice";



export const store = configureStore({
    reducer: {
      globalSlice: globalSlice,
      fetchSlice: fetchSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 