import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {DataT} from "../../../state/data";

const DescriptionWrapper = styled.div`

`
const DescriptionText = styled.span`
  display: block;
`
const DescriptionInput = styled.input`

`
type PropsType = {
    state: DataT,
    columnId: number,
    cardId: number,
    description: string,
    setState: (state: any) => void,
}

export const Description = (props: PropsType) => {

    const [description, setDescription] = useState(props.description);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
        let findColumn = props.state.columns.find(item => item.id === props.columnId);
        //@ts-ignore
        let findCard = findColumn.cards.find(item => item.id === props.cardId);
        //@ts-ignore
        findCard.description = description;
        let newColumns = props.state.columns.map(item => item.id === props.columnId ? findColumn : item)
        let newState = {columns: newColumns}
        props.setState(newState)

    }

    const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value = '';
    }


    return (
        <DescriptionWrapper>
            <DescriptionText>
                {description ? description : 'Добавьте более подробной описание...'}
            </DescriptionText>
            <DescriptionInput
                type={'text'}
                // value={description}
                placeholder={'Описание...'}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
        </DescriptionWrapper>
    )
}