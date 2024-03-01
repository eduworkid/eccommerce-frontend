import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductState {
  product: any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: ProductState = {
  product: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDataProduct = createAsyncThunk("product", async (_, thunkAPI) => {
  try {
 
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}products`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
    }
    throw error;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getDataProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.product = action.payload;
    });
    builder.addCase(getDataProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      if (action.payload) {
        state.message = action.payload as string;
      }
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
