import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoryState {
  category: any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: CategoryState = {
  category: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDataCategory = createAsyncThunk("category", async (_, thunkAPI) => {
  try {
 
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}category`);
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

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getDataCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataCategory.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.category = action.payload;
    });
    builder.addCase(getDataCategory.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      if (action.payload) {
        state.message = action.payload as string;
      }
    });
  },
});

export const { reset } = categorySlice.actions;
export default categorySlice.reducer;
