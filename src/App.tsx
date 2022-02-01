import React, {useEffect, useState} from 'react';
import {Column} from "./components/column/Column";
import styled from "styled-components";
import {Login} from "./components/login/Login";
import {data, DataT} from "./state/data";

const ColumnWrapper = styled.div`
  display: flex;
  margin: 10px;
`

function App() {

    const [state, setState] = useState<DataT>(data);
    const [name, setName] = useState('');

    const localStorageNameUser = localStorage.getItem('nameUser');

    useEffect(() => {
        if (localStorageNameUser) {
            setName(localStorageNameUser)
        }
    }, [])

    let columns = state.columns.map(item => <Column key={item.id}
                                                    state={state}
                                                    name={item.title}
                                                    cards={item.cards}
                                                    columnId={item.id}
                                                    setState={setState}/>)


    return (
        <>
            {!localStorageNameUser ? <Login name={name} setName={setName}/> : null}
            <ColumnWrapper>
                {columns}
            </ColumnWrapper>

        </>
    )
        ;
}

export default App;
