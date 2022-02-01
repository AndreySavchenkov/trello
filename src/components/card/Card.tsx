import React, {ChangeEvent, useState} from "react";
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
const IputText = styled.input`
    
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

    const [click, setClick] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [cardName, setCardName] = useState(props.cardName)


    const clickHandler = () => {
        setClick(!click)
    }

    const changeInput = () => {
        setIsEdit(true)
    }

    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setCardName(e.currentTarget.value)
    }

    const blurHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setIsEdit(false)
        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        //@ts-ignore
        let findCard = findColumn.cards.find(item => item.id === props.cardId);
        //@ts-ignore
        findCard.title = e.currentTarget.value
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? findColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)
    }

    return (
        <>
            <Name onClick={clickHandler}>{props.cardName}</Name>

            {click ? <CardWrapper>
                   <ColumnName>в колонке {props.columnName}</ColumnName>

                {!isEdit ? <CardName onDoubleClick={changeInput}>{props.cardName}</CardName>
                    : <IputText type='text' value={cardName} onChange={changeHandler} onBlur={blurHandler}/>}

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



