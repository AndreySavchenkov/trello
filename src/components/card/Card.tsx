import React from "react";
import styled from "styled-components";
import {Description} from "./description/Description";
import {Comments} from "./comments/Comments";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
`
const CardName = styled.span`
    font-size: 18px;
`
const ColumnName = styled.span`
  font-size: 14px;
  color: green;
`


export const Card = () => {



    return (
        <CardWrapper>
            <ColumnName>карточка из TODO</ColumnName>
            <CardName>Card Name</CardName>
            <Description/>
            <Comments/>
        </CardWrapper>
    )
}