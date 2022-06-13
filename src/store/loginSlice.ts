import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userApi } from 'api/api';

export type User = {
  id: number;
  email: string;
  username: string;
  token: string;
};

type InitialState = {
  isLogin: boolean;
  user: User | undefined;
};

const initialState = {
  isLogin: false,
  user: {},
} as InitialState;

export const getCurrentUser = createAsyncThunk('users/getCurrentUser', async thunkAPI => {
  const response = await userApi.getCurrentUser();
  return response.data.user;
});
export const loginUser = createAsyncThunk(
  'users/loginUser',
  async (arg: { email: string; password: string }, thunkAPI) => {
    const response = await userApi.loginUser(arg.email, arg.password);
    return response.data;
  },
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<{ value: boolean }>) {
      state.isLogin = action.payload.value;
    },
    // setLoginName(state, action: PayloadAction<{ value: string; id: number }>) {
    //   state.loginData.name = action.payload.value;
    //   state.loginData.id = action.payload.id;
    // },
  },
  extraReducers: builder => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { setIsLogin } = loginSlice.actions;
export default loginSlice.reducer;
