import React, {useEffect, useState} from 'react';
import {Column} from "./components/column/Column";
import styled from "styled-components";
import {Login} from "./components/login/Login";
import {CardsT, data, DataT} from "./state/data";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "./store/store";
import {setIsLogin, setLoginName} from "./store/loginSlice";
import {ColumnT} from "./store/columnSlice";


const AppWrapper = styled.main`
  width: 100%;
`

const ColumnWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`

function App() {

    const stateColumn = useSelector<AppType>(state => state.column.columns)
    const isLogin = useSelector<AppType>(state => state.login.isLogin);
    const dispatch = useDispatch();

    // const [state, setState] = useState<DataT>(data);

    const localStorageNameUser = localStorage.getItem('nameUser');

    useEffect(() => {
        if (localStorageNameUser) {
            dispatch(setLoginName({value: localStorageNameUser}))
            dispatch(setIsLogin({value: true}))
        }
    }, [])


    let columns = stateColumn.map((item: ColumnT) => <Column key={item.id}
                                                             name={item.title}
                                                             cards={item.cards}
                                                             columnId={item.id}/>)


    console.log(isLogin);
    return (
        <AppWrapper>
            {!isLogin ? <Login/> : null}
            <ColumnWrapper>
                {columns}
            </ColumnWrapper>
        </AppWrapper>
    )

}

export default App;
