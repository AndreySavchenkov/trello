import React, {useEffect} from 'react';
import {Column} from "./components/column/Column";
import styled from "styled-components";
import {Login} from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "./store/store";
import {setIsLogin, setLoginName} from "./store/loginSlice";
import {ColumnsT, ColumnT} from "./store/columnSlice";


function App() {

    const stateColumn = useSelector<AppType>(state => state.column.columns) as ColumnsT;
    const isLogin = useSelector<AppType>(state => state.login.isLogin);
    const dispatch = useDispatch();

    const localStorageNameUser = localStorage.getItem('nameUser');

    useEffect(() => {
        if (localStorageNameUser) {
            dispatch(setLoginName({value: localStorageNameUser, id: Date.now()}))
            dispatch(setIsLogin({value: true}))
        }
    }, [])

    return (
        <AppWrapper>
            {!isLogin ? <Login/> : null}
            <ColumnWrapper>
                {stateColumn.map((item: ColumnT) => <Column key={item.id}
                                                            name={item.title}
                                                            cards={item.cards}
                                                            columnId={item.id}/>)}
            </ColumnWrapper>
        </AppWrapper>
    )
}

export default App;


const AppWrapper = styled.main`
  width: 100%;
`
const ColumnWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`