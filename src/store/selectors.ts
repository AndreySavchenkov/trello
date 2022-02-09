import React from "react";
import {AppType} from "store/store";
import {createSelector} from "reselect";

export const getAllColumns = (state: AppType) => state.column.columns;

export const getIsLogin = (state: AppType) => state.login.isLogin;

export const getLoginName = (state:AppType) => state.login.loginData.name;

export const getLoginId = (state:AppType) => state.login.loginData.id;

