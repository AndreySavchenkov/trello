import React from 'react';
import {Card} from "./components/card/Card";
import {Column} from "./components/column/Column";
import styled from "styled-components";
import {Login} from "./components/login/Login";

const ColumnWrapper = styled.div`
      display: flex;
      margin: 10px;
    `

function App() {

    return (
        <>
            <Login/>
            <ColumnWrapper>
                <Column/>
                <Column/>
                <Column/>
                <Column/>
            </ColumnWrapper>
            <Card/>
        </>
    )
        ;
}

export default App;
