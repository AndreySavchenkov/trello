import React, {useState} from 'react';
import {Card} from "./components/card/Card";
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

    let columns = state.columns.map(item => <Column key={item.id}
                                                    name={item.title}/>)

    return (
        <>
            <Login/>
            <ColumnWrapper>
                {columns}
                {/*<Column/>*/}
                {/*<Column/>*/}
                {/*<Column/>*/}
                {/*<Column/>*/}
            </ColumnWrapper>
            <Card/>
        </>
    )
        ;
}

export default App;
