import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {Card} from "../card/Card";
import {CardsT, DataT} from "../../state/data";


const WrapperColumn = styled.div`
  padding: 5px;
  border: 1px solid black;
  border-radius: 3px;
  width: 272px;
  height: 100%;
  overflow: hidden;
  background: #e3dfdf;
`
const ColumnName = styled.span`
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`
const ListCards = styled.div`
  display: flex;
  flex-direction: column;
`
const Button = styled.button`

`
const EditColumnName = styled.input`

`
type PropsType = {
    state: DataT,
    name: string,
    cards: CardsT,
    columnId: number,
    nameUser: string,
    setState: (state: any) => void,
}


export const Column = (props: PropsType) => {

    const [isEdit, setIsEdit] = useState(false);
    const [nameChangeCard, setNameChangeCard] = useState(props.name);

    let cardsShowArr = props.cards.map(item => <Card key={item.id}
                                                     cardId={item.id}
                                                     state={props.state}
                                                     cardName={item.title}
                                                     columnName={props.name}
                                                     writerCard={item.writer}
                                                     comments={item.comments}
                                                     nameUser={props.nameUser}
                                                     setState={props.setState}
                                                     columnId={props.columnId}
                                                     nameChangeCard={nameChangeCard}
                                                     description={item.description}/>)

    const clickHandler = () => {
        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        let newColumn = {
            //@ts-ignore
            ...findColumn, cards: [...findColumn.cards,
                {
                    id: Date.now(),
                    writer: props.nameUser,
                    title: 'новая таска',
                    description: '',
                    comments: []
                }]
        }
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? newColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)
    }



    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNameChangeCard(e.currentTarget.value)
    }
    const changeColumnName = () => {
        setIsEdit(true)
    }
    const onBlurHandler = () => {
        setIsEdit(false)
    }

    return (
        <WrapperColumn>

            {!isEdit ? <ColumnName onClick={changeColumnName}>{nameChangeCard}</ColumnName>
                : <EditColumnName value={nameChangeCard} onChange={changeHandler} onBlur={onBlurHandler}/>}

            <ListCards>
                {cardsShowArr}
            </ListCards>
            <Button onClick={clickHandler}>Добавить</Button>
        </WrapperColumn>
    )
}