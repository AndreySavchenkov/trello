import React from "react";
import styled from "styled-components";
import {NameCard} from "../card/NameCard";

const WrapperColumn = styled.div`
  border: 1px solid black;
  width: 300px;
`
const ColumnName = styled.span`
  color: red;
`
const ListCards = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

export const Column = () => {

    return(
        <WrapperColumn>
            <ColumnName>Column Name</ColumnName>
            <ListCards>
                <NameCard/>
                <NameCard/>
                <NameCard/>
            </ListCards>
        </WrapperColumn>
    )
}