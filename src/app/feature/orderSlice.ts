import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface OrderState {
  order: any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: OrderState = {
    order: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDataOrder = createAsyncThunk("order", async (_, thunkAPI) => {
  try {
 
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_API}orders`,
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );
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

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getDataOrder.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.order = action.payload;
    });
    builder.addCase(getDataOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      if (action.payload) {
        state.message = action.payload as string;
      }
    });
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
