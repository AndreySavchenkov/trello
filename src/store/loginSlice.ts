import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    isLogin: boolean
    loginName: string
}

const initialState = {
    isLogin: false,
    loginName: '',
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin(state, action: PayloadAction<{value: boolean}>)  {
            state.isLogin = action.payload.value
        },
        setLoginName(state, action: PayloadAction<{value: string}>)  {
            state.loginName = action.payload.value
        }
    },
})


export const { setIsLogin, setLoginName } = loginSlice.actions
export default loginSlice.reducer

