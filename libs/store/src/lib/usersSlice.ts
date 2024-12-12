import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInterface {
  id: string;
  name: string;
  email: string;
  type: string;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  usersList: UserInterface[];
  usersCount: number;
}

const initialState: AuthState = {
  usersList: [],
  usersCount: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsersList: (state, action: PayloadAction<UserInterface[]>) => {
      state.usersList = action.payload;
    },
    setUsersCount: (state, action: PayloadAction<number>) => {
      state.usersCount = action.payload;
    },

    clearState: (state) => {
      state.usersCount = 0;
      state.usersList = [];
    },
  },
});

export const { setUsersList, setUsersCount, clearState } = authSlice.actions;
export default authSlice.reducer;
