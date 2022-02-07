import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
    isLogin: boolean
    loginData: {
        name:string,
        id: number | undefined,
    }
}

const initialState = {
    isLogin: false,
    loginData: {
        name: '',
        id: undefined,
    },
} as InitialState

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLogin(state, action: PayloadAction<{ value: boolean }>) {
            state.isLogin = action.payload.value
        },
        setLoginName(state, action: PayloadAction<{ value: string,id: number }>) {
            state.loginData.name = action.payload.value;
            state.loginData.id = action.payload.id;
        }
    },
})


export const {setIsLogin, setLoginName} = loginSlice.actions
export default loginSlice.reducer

