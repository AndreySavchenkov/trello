import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {Card} from "../card/Card";
import {CardsT, DataT} from "../../state/data";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "../../store/store";
import {addCard} from "../../store/columnSlice";


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
    name: string,
    cards: CardsT,
    columnId: number,
}


export const Column: FC<PropsType> = ({columnId, ...props}) => {

    const loginName = useSelector<AppType>(state => state.login.loginName);
    const dispatch = useDispatch();

    const [isEdit, setIsEdit] = useState(false);
    const [nameChangeCard, setNameChangeCard] = useState(props.name);

    let cardsShowArr = props.cards.map(item => <Card key={item.id}
                                                     cardId={item.id}
                                                     // state={props.state}
                                                     cardName={item.title}
                                                     columnName={props.name}
                                                     writerCard={item.writer}
                                                     comments={item.comments}
                                                     // setState={props.setState}
                                                     columnId={columnId}
                                                     nameChangeCard={nameChangeCard}
                                                     description={item.description}/>)

    const clickHandler = () => {
        dispatch(addCard({columnId,loginName}))
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