import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const signIn = createAsyncThunk(
  'auth/signIn',
  async ({ email, password }:{email: string, password: string}, thunkAPI) => {
    try {
      const response = await fetch('htpp://localhost:3001/api/v1/user/login', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
         body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        return { token: data.token };
      } else {
        return thunkAPI.rejectWithValue(data.error);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({code:'NETWORK-ERROR', message: error.message });
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoading: false,
    error: null
  },
  reducers: {
    logout(state) {
      state.token = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
       
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
