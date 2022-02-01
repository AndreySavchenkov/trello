import React from "react";
import styled from "styled-components";
import {Card} from "../card/Card";
import {CardsT, DataT} from "../../state/data";


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
const Button = styled.button`

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

    let cardsShowArr = props.cards.map(item => <Card key={item.id}
                                                     cardId={item.id}
                                                     state={props.state}
                                                     cardName={item.title}
                                                     columnName={props.name}
                                                     comments={item.comments}
                                                     nameUser={props.nameUser}
                                                     setState={props.setState}
                                                     columnId={props.columnId}
                                                     description={item.description}/>)

    const clickHandler = () => {

        let findColumn = props.state.columns.find(item => item.id === props.columnId);

        let newColumn = {
            //@ts-ignore
            ...findColumn, cards: [...findColumn.cards,
                {
                    id: 2,
                    title: 'новая таска',
                    description: '',
                    comments: []
                }]
        }
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? newColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)
    }

    return (
        <WrapperColumn>
            <ColumnName>{props.name}</ColumnName>
            <ListCards>
                {cardsShowArr}
            </ListCards>
            <Button onClick={clickHandler}>Добавить</Button>
        </WrapperColumn>
    )
}