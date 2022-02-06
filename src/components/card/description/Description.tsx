import React, {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {DataT} from "../../../state/data";
import {useDispatch} from "react-redux";
import {addDescriptionCard} from "../../../store/columnSlice";

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
    cardId: number,
    columnId: number,
    description: string,
}

export const Description: FC<PropsType> = ({columnId, cardId, ...props}) => {

    const dispatch = useDispatch();

    const [description, setDescription] = useState(props.description);

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.currentTarget.value)
    }

    const blurHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.currentTarget.value = '';
        dispatch(addDescriptionCard({columnId, cardId, description}))
    }


    return (
        <DescriptionWrapper>
            <DescriptionText>
                {description ? description : 'Добавьте более подробной описание...'}
            </DescriptionText>
            <DescriptionInput
                placeholder={'Описание...'}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
        </DescriptionWrapper>
    )
}