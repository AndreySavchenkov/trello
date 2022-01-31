import React, {useState} from "react";
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
const Name = styled.span`
  border: 1px solid black;
`


export const Card = () => {

    const [click, setClick] = useState(false)

    const clickHandler = () => {
        setClick(!click)
    }

    return (
        <>
            <Name onClick={clickHandler}>Card Name</Name>
            {click ? <CardWrapper>
                <ColumnName>карточка из TODO</ColumnName>
                <CardName>Card Name</CardName>
                <Description/>
                <Comments/>
            </CardWrapper> : null}
        </>

    )
}



