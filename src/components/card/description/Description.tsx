import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {DataT} from "../../../state/data";

const DescriptionWrapper = styled.div`

`
const DescriptionText = styled.span`
  display: block;
  margin-bottom: 10px;
  overflow: hidden;
`
const DescriptionInput = styled.textarea`
  width: 90%;
  margin-bottom: 40px;
`
type PropsType = {
    state: DataT,
    cardId: number,
    columnId: number,
    description: string,
    setState: (state: any) => void,
}

export const Description = (props: PropsType) => {

    const [description, setDescription] = useState(props.description);

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    const blurHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget.value = '';

        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        //@ts-ignore
        let findCard = findColumn.cards.find(item => item.id === props.cardId);
        //@ts-ignore
        findCard.description = description;
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? findColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)

    }


    return (
        <DescriptionWrapper>
            <DescriptionText>
                {description ? description : 'Добавьте более подробной описание...'}
            </DescriptionText>
            <DescriptionInput
                // value={description}
                placeholder={'Описание...'}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
        </DescriptionWrapper>
    )
}