import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`

`
const DescriptionText = styled.span`
    display: block;
`
const DescriptionInput = styled.input`

`
type PropsType = {
    description: string
}

export const Description = (props: PropsType) => {

    const [description, setDescription] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }


    return (
        <DescriptionWrapper>
            <DescriptionText>
                { props.description ? props.description : 'Добавьте более подробной описание...'}
            </DescriptionText>
            <DescriptionInput
                type={'text'}
                value={description}
                placeholder={'Описание...'}
                onChange={changeHandler}
                onBlur={() => setDescription('')}/>
            {description}
        </DescriptionWrapper>
    )
}