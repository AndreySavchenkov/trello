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
type ColumnType = {
    name: string;
}

export const Column = (props: ColumnType) => {

    return(
        <WrapperColumn>
            <ColumnName>{props.name}</ColumnName>
            <ListCards>
                <NameCard/>
                <NameCard/>
                <NameCard/>
            </ListCards>
        </WrapperColumn>
    )
}