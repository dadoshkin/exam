import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
