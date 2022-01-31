import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";

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

export const Login = () => {

    const [name, setName] = useState('');

    const localStorageNameUser = localStorage.getItem('nameUser');

    useEffect(() => {
        if (localStorageNameUser) {
            setName(localStorageNameUser)
        }
    }, [])

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        localStorage.setItem('nameUser', e.currentTarget.value)
    }

    return (
        <LoginWrapper>
            <LoginText>Напишите ваше имя: </LoginText>
            <LoginInput placeholder={'Имя...'} value={name} onChange={changeHandler}/>
            Ваше имя: {name}
        </LoginWrapper>
    )
}