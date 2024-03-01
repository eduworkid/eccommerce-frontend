import { configureStore } from '@reduxjs/toolkit';
import productReducer from './feature/productSlice';
import userReducer from './feature/authSlice'
import categoryReducer from './feature/categorySlice'
import orderReducer from './feature/orderSlice'

export const store = configureStore({
  reducer: {
    product: productReducer,
    users : userReducer,
    category : categoryReducer,
    order : orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
