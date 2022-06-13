// import { Columns } from 'store/columnSlice';
import { User } from 'store/loginSlice';
import { AppType } from 'store/store';

// export const getAllColumns = (state: AppType): Columns => state.column.columns;
export const getIsLogin = (state: AppType): boolean => state.login.isLogin;
export const getCorrectUser = (state: AppType): User | undefined => state.login.user;
