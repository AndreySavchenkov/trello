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
    name: string,
    columnId: number,
    cards: CardsT,
    nameUser: string,
    setState: (state: any) => void,
    state: DataT,
}


export const Column = (props: PropsType) => {

    let cardsShowArr = props.cards.map(item => <Card key={item.id}
                                                     cardId={item.id}
                                                     state={props.state}
                                                     cardName={item.title}
                                                     columnName={props.name}
                                                     nameUser={props.nameUser}
                                                     comments={item.comments}
                                                     setState={props.setState}
                                                     columnId={props.columnId}
                                                     description={item.description}/>)

    return (
        <WrapperColumn>
            <ColumnName>{props.name}</ColumnName>
            <ListCards>
                {cardsShowArr}
                {/*<Card columnName={props.name}/>*/}
            </ListCards>
            <Button>Добавить</Button>
        </WrapperColumn>
    )
}