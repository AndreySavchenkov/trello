import { Columns } from 'store/columnSlice';
import { AppType } from 'store/store';

export const getAllColumns = (state: AppType): Columns => state.column.columns;

export const getIsLogin = (state: AppType): boolean => state.login.isLogin;

export const getLoginName = (state: AppType): string => state.login.loginData.name;

export const getLoginId = (state: AppType): any => state.login.loginData.id;
