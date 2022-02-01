import React, {ChangeEvent, useEffect} from "react";
import styled from "styled-components";
import {DataT} from "../../state/data";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`
const LoginText = styled.span`

`
const LoginInput = styled.input`
  width: 300px;
`
const Button = styled.button`

`
type PropsType = {
    name: string,
    setName: (name: any) => void
}

export const Login = (props: PropsType) => {


    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setName(e.currentTarget.value)

    }

    const clickHandler = () => {
        localStorage.setItem('nameUser', props.name)
    }

    return (
        <LoginWrapper>
            <LoginText>Напишите ваше имя: </LoginText>
            <LoginInput placeholder={'Имя...'}
                        value={props.name}
                        onChange={changeHandler}/>
            <Button onClick={clickHandler}>Это я</Button>
        </LoginWrapper>
    )
}