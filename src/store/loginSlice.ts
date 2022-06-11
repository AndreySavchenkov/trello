import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userApi } from 'api/api';

type InitialState = {
  isLogin: boolean;
  loginData: {
    name: string;
    id: number | undefined;
  };
  user: any;
};

const initialState = {
  isLogin: false,
  loginData: {
    name: '',
    id: undefined,
  },
  user: {},
} as InitialState;

export const getCurrentUser = createAsyncThunk(
  'users/getCurrentUser',
  async ( thunkAPI) => {
    const response = await userApi.getCurrentUser()
    return response.data
  }
)

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLogin(state, action: PayloadAction<{ value: boolean }>) {
      state.isLogin = action.payload.value;
    },
    setLoginName(state, action: PayloadAction<{ value: string; id: number }>) {
      state.loginData.name = action.payload.value;
      state.loginData.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
});

export const { setIsLogin, setLoginName } = loginSlice.actions;
export default loginSlice.reducer;
