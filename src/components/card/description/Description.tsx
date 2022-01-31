import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";

const DescriptionWrapper = styled.div`

`
const DescriptionInput = styled.input`

`

export const Description = () => {

    const [description, setDescription] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDescription(e.currentTarget.value)
    }

    return (
        <DescriptionWrapper>
            Добавьте более подробной описание...
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