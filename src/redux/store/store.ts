import { priceApi } from "@/app/Services/Price/priceApi";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"; 
export const store = configureStore({
  reducer: {
    [priceApi.reducerPath]: priceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(priceApi.middleware),  
});

setupListeners(store.dispatch);

    
  
