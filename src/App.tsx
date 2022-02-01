import React, {useEffect, useState} from 'react';
import {Column} from "./components/column/Column";
import styled  from "styled-components";
import {Login} from "./components/login/Login";
import {data, DataT} from "./state/data";



const AppWrapper = styled.main`
  width: 100%;
`

const ColumnWrapper = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-around;
`

function App() {

    const [state, setState] = useState<DataT>(data);
    const [nameUser, setNameUser] = useState('');

    const localStorageNameUser = localStorage.getItem('nameUser');

    useEffect(() => {
        if (localStorageNameUser) {
            setNameUser(localStorageNameUser)
        }
    }, [])

    let columns = state.columns.map(item => <Column key={item.id}
                                                    state={state}
                                                    name={item.title}
                                                    cards={item.cards}
                                                    columnId={item.id}
                                                    nameUser={nameUser}
                                                    setState={setState}/>)


    return (
        <AppWrapper>
            {!localStorageNameUser ? <Login name={nameUser} setName={setNameUser}/> : null}
            <ColumnWrapper>
                {columns}
            </ColumnWrapper>
        </AppWrapper>
    )

}

export default App;
