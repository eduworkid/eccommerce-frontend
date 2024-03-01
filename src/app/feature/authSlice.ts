import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface userState {
  user: any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: userState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getMe = createAsyncThunk("me", async (_, thunkAPI) => {
  try {
 
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_AUTH}me`, {
        headers: {
            'Authorization': localStorage.getItem("Authorization")
        }
    } );
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      if (action.payload) {
        state.message = action.payload as string;
      }
    });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
