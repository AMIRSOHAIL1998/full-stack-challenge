import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  name: string;
  email: string;
  type: string;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  name: '',
  email: '',
  type: 'user',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.type = action.payload.type;
      state.token = action.payload.type;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.name = '';
      state.email = '';
      state.type = '';
      state.token = '';
    },
  },
});

export const { setUserAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
