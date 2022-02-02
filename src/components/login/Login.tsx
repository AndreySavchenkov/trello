import React, {ChangeEvent, useEffect, useState} from "react";
import styled from "styled-components";
import {DataT} from "../../state/data";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 3px;
  width: 400px;
  min-height: 400px;
  background: #e3dfdf;

  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`
const LoginText = styled.span`
  margin-top: 100px;
  color: #172b4d;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 10px;
`
const LoginInput = styled.input`
  width: 300px;
  margin-top: 30px;
  margin-bottom: 40px;
`
const Button = styled.button`
padding: 8px 12px;
`
type PropsType = {
    name: string,
    setName: (name: any) => void
}

export const Login = (props: PropsType) => {

    const [isLogin, setIsLogin] = useState(true)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setName(e.currentTarget.value)
    }

    const clickHandler = () => {
        localStorage.setItem('nameUser', props.name)
        setIsLogin(false)
    }

    return (
        <>
            {isLogin ? <LoginWrapper>
                    <LoginText>Напишите ваше имя: </LoginText>
                    <LoginInput placeholder={'Имя...'}
                                value={props.name}
                                onChange={changeHandler}/>
                    <Button onClick={clickHandler}>Это я</Button>
                </LoginWrapper>
                : null}
        </>


    )
}