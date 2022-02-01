import React, {useState} from "react";
import styled from "styled-components";
import {Description} from "./description/Description";
import {Comments} from "./comments/Comments";
import {CommentsT, DataT} from "../../state/data";

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

type PropsType = {
    state: DataT,
    cardId: number,
    cardName: string,
    columnId: number,
    nameUser: string,
    columnName: string,
    description: string,
    comments: CommentsT,
    setState: (state: any) => void,
}

export const Card = (props: PropsType) => {

    const [click, setClick] = useState(false)

    const clickHandler = () => {
        setClick(!click)
    }

    return (
        <>
            <Name onClick={clickHandler}>{props.cardName}</Name>
            {click ? <CardWrapper>
                <ColumnName>в колонке {props.columnName}</ColumnName>
                <CardName>{props.cardName}</CardName>

                <Description state={props.state}
                             cardId={props.cardId}
                             setState={props.setState}
                             columnId={props.columnId}
                             description={props.description}/>

                <Comments state={props.state}
                          cardId={props.cardId}
                          setState={props.setState}
                          columnId={props.columnId}
                          comments={props.comments}
                          nameUser={props.nameUser}/>

            </CardWrapper> : null}
        </>

    )
}



